/*
  Change format from nested format to piped format ("aa|bb|cc"). Output result to stdout.
  Usage : node scripts/tchap/translations/reformatToPiped.js --file=$TCHAP_TRANSLATION_FILE > $OUTFILE

  Nested format :
  {
    "security": {
      "backup_keys": {
        "en": "Hello",
        "fr": "Coucou"
      }
    }
  }

  aa|bb|cc format (piped format):
  {
    "security|backup_keys": {
      "en": "Hello",
      "fr": "Coucou"
    }
  }
  */

const parseArgs = require("minimist");

const argv = parseArgs(process.argv.slice(2), {});
const tchapTranslations = require(argv.file);

const output = {};
const reformat = (translations, parentKey) => {
  for (const key of Object.keys(translations)) {
    if ('en' in translations[key]) {
      output[parentKey + key] = translations[key];
    } else {
      reformat(translations[key], parentKey + key + '|');
    }
  }
}

reformat(tchapTranslations, "");
console.log(JSON.stringify(output, null, 4));