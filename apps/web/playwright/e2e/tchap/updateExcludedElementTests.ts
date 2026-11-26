/*

Command : pnpm dlx tsx ./playwright/e2e/tchap/updateExcludedElementTests.ts
Run after a test was run : npm test:playwright --project=Chrome --workers=3 --retries=0 --trace=off --reporter=line --shard=3/5
*/

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(scriptDir, "../../..");
const exclusionsFile = path.join(scriptDir, "excludedElementTests.ts");
const changelogFile = path.join(scriptDir, "excludedElementTests.changelog.md");

const changelogHeader = [
    "# Changelog — excludedElementTests.ts",
    "",
    "Known-failure exclusion updates recorded by `updateExcludedElementTests.ts`, newest first.",
    "Each section is grouped by run date, git commit and branch.",
    "",
].join("\n");

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const printOnly = args.includes("--print");
const resultsDirArg = args.find((arg) => arg.startsWith("--results-dir="));
const resultsDir = path.resolve(webRoot, resultsDirArg?.slice("--results-dir=".length) ?? "playwright/test-results");
const projectArgs = args.filter((arg) => arg.startsWith("--project="));

interface ListedSpec {
    id: string;
    title: string;
    tags?: string[];
    tests?: { projectName?: string }[];
}

interface ListedSuite {
    title: string;
    tags?: string[];
    specs?: ListedSpec[];
    suites?: ListedSuite[];
}

interface FailedTest {
    parts: string[];
    grepTitle: string;
}

function escapeRegExp(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Playwright matches grep/grepInvert against _grepTitleWithTags(), which is
// "<project name> <file> <describe...> <test title> <@tags...>" — so patterns
// must allow the project-name prefix and trailing @tags.
function patternFromParts(parts: string[]): string {
    return "^(?:[^ ]+ )?" + parts.map(escapeRegExp).join(".*") + "(?: @[^ ]+)*$";
}

function normalizePattern(pattern: string): string {
    return pattern.startsWith("^") && !pattern.startsWith("^(?:[^ ]+ )?") ? "^(?:[^ ]+ )?" + pattern.slice(1) : pattern;
}

function withAt(tag: string): string {
    return tag.startsWith("@") ? tag : `@${tag}`;
}

function listTests(): Map<string, FailedTest> {
    const cli = path.resolve(webRoot, "../../node_modules/@playwright/test/cli.js");
    const listArgs = projectArgs.length > 0 ? projectArgs : ["--project=Chrome"];
    const output = execFileSync(
        process.execPath,
        [cli, "test", "playwright/e2e", "--list", "--reporter=json", ...listArgs],
        { cwd: webRoot, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 },
    );
    const report = JSON.parse(output) as { suites?: ListedSuite[] };
    const byId = new Map<string, FailedTest>();
    const walk = (suite: ListedSuite, titles: string[], tags: string[]): void => {
        const nextTitles = suite.title ? [...titles, suite.title] : titles;
        const nextTags = [...tags, ...(suite.tags ?? [])];
        for (const spec of suite.specs ?? []) {
            if (!byId.has(spec.id)) {
                const project = spec.tests?.[0]?.projectName;
                byId.set(spec.id, {
                    parts: [...nextTitles, spec.title],
                    grepTitle: [
                        project,
                        ...nextTitles,
                        spec.title,
                        ...nextTags.map(withAt),
                        ...(spec.tags ?? []).map(withAt),
                    ]
                        .filter(Boolean)
                        .join(" "),
                });
            }
        }
        for (const child of suite.suites ?? []) {
            walk(child, nextTitles, nextTags);
        }
    };
    for (const suite of report.suites ?? []) {
        walk(suite, [], []);
    }
    return byId;
}

function failedFromLastRun(): string[] {
    const file = path.join(resultsDir, ".last-run.json");
    if (!fs.existsSync(file)) {
        return [];
    }
    const data = JSON.parse(fs.readFileSync(file, "utf8")) as { failedTests?: unknown };
    return Array.isArray(data.failedTests) ? data.failedTests.filter((id): id is string => typeof id === "string") : [];
}

function failedFromErrorContexts(): FailedTest[] {
    const failed: FailedTest[] = [];
    if (!fs.existsSync(resultsDir)) {
        return failed;
    }
    for (const entry of fs.readdirSync(resultsDir, { withFileTypes: true })) {
        if (!entry.isDirectory()) {
            continue;
        }
        const contextFile = path.join(resultsDir, entry.name, "error-context.md");
        if (!fs.existsSync(contextFile)) {
            continue;
        }
        const name = /^\s*-?\s*Name:\s*(.+)$/m.exec(fs.readFileSync(contextFile, "utf8"))?.[1]?.trim();
        if (name) {
            const parts = name.split(" >> ");
            failed.push({ parts, grepTitle: parts.join(" ") });
        }
    }
    return failed;
}

interface GitInfo {
    branch: string;
    hash: string;
    title: string;
}

function readGitInfo(): GitInfo {
    const git = (args: string[]): string => {
        try {
            return execFileSync("git", args, { cwd: webRoot, encoding: "utf8" }).trim();
        } catch {
            return "";
        }
    };
    return {
        branch: git(["rev-parse", "--abbrev-ref", "HEAD"]) || "unknown",
        hash: git(["rev-parse", "--short", "HEAD"]) || "unknown",
        title: git(["log", "-1", "--pretty=%s"]) || "unknown",
    };
}

function buildChangelogSection(added: string[], git: GitInfo): string {
    const date = new Date().toISOString().slice(0, 10);
    const details =
        added.length > 0
            ? `Added ${added.length} exclusion pattern(s) from the last run:\n\n${added.map((pattern) => `- \`${pattern}\``).join("\n")}`
            : "No new exclusion patterns (existing entries only normalized).";
    return `## ${date} — \`${git.hash}\` ${git.title} — branch \`${git.branch}\`\n\n${details}\n`;
}

function printCopyPasteBlock(added: string[]): void {
    const git = readGitInfo();
    console.log(`::group::Tchap e2e — ${added.length} new excluded test(s) to copy-paste`);
    console.log("Paste the patterns below into excludedElementTestPatternStrings in");
    console.log("apps/web/playwright/e2e/tchap/excludedElementTests.ts:");
    console.log("");
    console.log("```ts");
    console.log(added.map((pattern) => `    ${JSON.stringify(pattern)},`).join("\n") || "    // (no new patterns)");
    console.log("```");
    console.log("");
    console.log("Paste the section below at the top of");
    console.log("apps/web/playwright/e2e/tchap/excludedElementTests.changelog.md (after the header):");
    console.log("");
    console.log("```md");
    console.log(buildChangelogSection(added, git));
    console.log("```");
    console.log("::endgroup::");
}

function appendChangelog(added: string[], git: GitInfo): void {
    const section = `${buildChangelogSection(added, git)}\n`;
    const content = fs.existsSync(changelogFile) ? fs.readFileSync(changelogFile, "utf8") : changelogHeader;
    const firstSection = content.indexOf("\n## ");
    const updated =
        firstSection === -1
            ? `${content.replace(/\n*$/, "\n")}\n${section}`
            : `${content.slice(0, firstSection + 1)}${section}${content.slice(firstSection + 1)}`;
    fs.writeFileSync(changelogFile, updated);
    console.log(`Updated ${changelogFile}.`);
}

function readExistingPatterns(source: string): { patterns: string[]; start: number; end: number } {
    const arrayStart = "const excludedElementTestPatternStrings: string[] = [";
    const start = source.indexOf(arrayStart);
    if (start === -1) {
        throw new Error(`Cannot find "${arrayStart}" in ${exclusionsFile}`);
    }
    const end = source.indexOf("\n];", start);
    if (end === -1) {
        throw new Error(`Cannot find end of the exclusion array in ${exclusionsFile}`);
    }
    const block = source.slice(start + arrayStart.length, end);
    const patterns = [...block.matchAll(/"((?:\\.|[^"\\])*)"/g)].map((match) => JSON.parse(`"${match[1]}"`) as string);
    return { patterns, start, end };
}

function main(): void {
    const listed = listTests();
    const failed: FailedTest[] = [];
    const seen = new Set<string>();
    for (const id of failedFromLastRun()) {
        const test = listed.get(id);
        if (test && !seen.has(test.grepTitle)) {
            seen.add(test.grepTitle);
            failed.push(test);
        }
    }
    for (const test of failedFromErrorContexts()) {
        if (!seen.has(test.grepTitle)) {
            seen.add(test.grepTitle);
            failed.push(test);
        }
    }

    const source = fs.readFileSync(exclusionsFile, "utf8");
    const { patterns: rawExisting, start, end } = readExistingPatterns(source);
    const existing = [...new Set(rawExisting.map(normalizePattern))].sort();
    const existingRegexps = existing.map((pattern) => new RegExp(pattern));

    const added: string[] = [];
    for (const test of failed) {
        if (existingRegexps.some((re) => re.test(test.grepTitle))) {
            continue;
        }
        const pattern = patternFromParts(test.parts);
        if (!existing.includes(pattern) && !added.includes(pattern)) {
            added.push(pattern);
        }
    }

    console.log(`Failed tests found: ${failed.length}`);
    console.log(`New exclusion patterns: ${added.length}`);
    for (const pattern of added) {
        console.log(`  + ${pattern}`);
    }

    const merged = [...new Set([...existing, ...added])].sort();
    if (JSON.stringify(merged) === JSON.stringify(existing)) {
        return;
    }
    if (printOnly) {
        printCopyPasteBlock(added);
        return;
    }
    if (dryRun) {
        console.log("Dry run: no changes written.");
        return;
    }

    const body = merged.map((pattern) => `    ${JSON.stringify(pattern)},`).join("\n");
    const updated = `${source.slice(0, start)}const excludedElementTestPatternStrings: string[] = [\n${body}\n${source.slice(end + 1)}`;
    fs.writeFileSync(exclusionsFile, updated);
    console.log(`Updated ${exclusionsFile} (${merged.length} patterns total).`);
    appendChangelog(added, readGitInfo());
}

main();
