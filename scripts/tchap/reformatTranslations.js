
const parseArgs = require("minimist");

const argv = parseArgs(process.argv.slice(2), {});
const tchapTranslations = require(argv.file);

const reformat = (obj) => {
  for (const key of Object.keys(obj)) {
    if ('en' in obj[key]) {
      obj[key] = obj[key].en;
    } else {
      reformat(obj[key]);
    }
  }
}

reformat(tchapTranslations);
console.log(JSON.stringify(tchapTranslations));