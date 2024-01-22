/*
 Extract EN translations only from tchap translations. Change format to be compatible with element's i18n files.
 We convert { "key": { "en": "en value", "fr": "fr value"}} to { "key": "en value"}
 We output the result to stdout.
 Note : this works with nested keys.
 Note : We could do it with jq probably, but I gave up trying. This does it but breaks on nested keys :
 cat $TCHAP_TRANSLATION_FILE | jq  'to_entries[] | { (.key): .value.en }' | jq -n '[inputs] | add' > $TCHAP_TRANSLATION_EN_FILE # no nested keys
*/

const parseArgs = require("minimist");

const argv = parseArgs(process.argv.slice(2), {});
const tchapTranslations = require(argv.file);

// Change the translation object in place, recursively.
const reformat = (translations) => {
  for (const key of Object.keys(translations)) {
    if ('en' in translations[key]) {
      translations[key] = translations[key].en;
    } else {
      reformat(translations[key]);
    }
  }
}

reformat(tchapTranslations);
console.log(JSON.stringify(tchapTranslations));