
const parseArgs = require("minimist");

const argv = parseArgs(process.argv.slice(2), {});
const tchapTranslations = require(argv.file);
const toRemove = require(argv.toremove);

for (const key of toRemove) {
  delete tchapTranslations[key];
}

console.log(JSON.stringify(tchapTranslations));