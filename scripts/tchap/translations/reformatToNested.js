/*
  Change format from piped format ("aa|bb|cc") to nested format. Output result to stdout.
  Usage : node scripts/tchap/translations/reformatToNested.js --file=$TCHAP_TRANSLATION_FILE > $OUTFILE

  aa|bb|cc format (piped format):
  {
    "security|backup_keys": {
      "en": "Hello",
      "fr": "Coucou"
    }
  }

  Nested format :
  {
    "security": {
      "backup_keys": {
        "en": "Hello",
        "fr": "Coucou"
      }
    }
  }
*/

const parseArgs = require("minimist");

const argv = parseArgs(process.argv.slice(2), {});
const tchapTranslations = require(argv.file);

const reformat = (translations) => {
  for (const [key, value] of Object.entries(translations)) {
    // Split "aa|bb|cc" into "aa" and "bb|cc"
    let [parentKey, ...restOfKey] = key.split('|');
    restOfKey = restOfKey.join('|');
    if (restOfKey === '') { // no "|" in key
      // do nothing, it's already in the right format.
    } else {
      // initialize translations[parentKey] if not exist
      if (!(parentKey in translations)) {
        translations[parentKey] = {};
      }
      translations[parentKey][restOfKey] = value;
      delete translations[key];
      reformat(translations[parentKey]);
    }
  }
}

reformat(tchapTranslations);
console.log(JSON.stringify(tchapTranslations, null, 4));
