const fs = require("fs");

function checkForDuplicateFiles(patchFile) {
    console.log("Checking patch file for files that are patched twice...");
    const findFirstDuplicate = (arr) => {
        const sortedArr = arr.slice().sort();
        for (let i = 0; i < sortedArr.length - 1; i++) {
            if (sortedArr[i + 1] == sortedArr[i]) {
                return sortedArr[i];
            }
        }
        return;
    };

    let fileList = [];
    Object.values(patchFile).forEach((patchInfo) => {
        fileList = fileList.concat(patchInfo.files);
    });
    const dup = findFirstDuplicate(fileList);
    if (dup) {
        console.error("This file is used in two different patches:", dup);
        console.error("The changes of the two packages will be mixed up. Don't do this.");
        process.exit(1);
    }
    console.log("... no files that are patched twice.");
}

function checkForMissingPatchDirs(patchFile, patchDirs) {
    console.log("Checking for missing patch directories...");
    const patchNames = Object.keys(patchFile);
    patchNames.forEach((patchName) => {
        const found = patchDirs.find((patchDir) => patchDir === patchName);
        if (!found) {
            console.error("\nPATCH PROBLEM!");
            console.error(
                "The patch",
                patchName,
                "is listed in patches.json but there is no corresponding directory in /patches.",
            );
            console.error("Either remove it from patches.json, or use yarn patch-make to make the missing patch file.");
            console.error("\n");
            process.exit(1);
        }
    });
    console.log("... no missing patch directories.");
}

function checkForMissingElementsInPatchFile(patchFile, patchDirs) {
    console.log("Checking for missing elements in patches.json...");
    const patchNames = Object.keys(patchFile);
    patchDirs.forEach((patchDir) => {
        const found = patchNames.find((patchName) => patchName === patchDir);
        if (!found) {
            console.error("\nPATCH PROBLEM!");
            console.error("The patch", patchDir, "has a directory in /patches, but it is not listed in patches.json.");
            console.error("Either add it to patches.json, or remove the directory in /patches.");
            console.error("\n");
            process.exit(1);
        }
    });
    console.log("... no missing elements in patches.json.");
}

const getPatchDirs = () => {
    return fs
        .readdirSync("patches", { withFileTypes: true })
        .filter((file) => file.isDirectory())
        .map((dir) => dir.name);
};

const patchFile = require("../patches/patches.json");
const patchDirs = getPatchDirs();
checkForDuplicateFiles(patchFile);
checkForMissingPatchDirs(patchFile, patchDirs);
checkForMissingElementsInPatchFile(patchFile, patchDirs);
