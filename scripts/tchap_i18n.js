/* Output by matrix-gen-i18n. Format : { "key": "english string" } */
const tchapStrings = require('../src/i18n/strings/tchap_strings.json'); // todo generate this. Needs to remove element files, and include patch files.
/* Our translation file. Format : { "key": {"en": "english string", "fr": "texte francais"} } */
const tchapTranslations = require('../src/i18n/strings/tchap_translations.json');
/* the en_EN file for tchap-web-v4. Format : { "key": "english string" } */
const elementTranslations = require('../src/i18n/strings/en_EN.json');

// Diff the keys of the two files, they should be the same.
const keysInCode = Object.keys(tchapStrings);
const ourKeys = Object.keys(tchapTranslations);
const elementKeys = Object.keys(elementTranslations);

// Remove "README", it's not a string.
const index = ourKeys.indexOf("README");
if (index > -1) {
    ourKeys.splice(index, 1);
}

// Effectively translated strings : translated either by element or by tchap.
// keysIni18nFiles = ourKeys || elementKeys
const keysIni18nFiles = [...new Set([...ourKeys, ...elementKeys])];

// Keys that are not translated
// untranslatedKeys = keysInCode - keysIni18nFiles
const inGeneratedButNotInOurs = keysInCode.filter(x => !keysIni18nFiles.includes(x));
console.log("These strings are in the code but not in tchap_translations.json :");
console.log(inGeneratedButNotInOurs);
// todo add them to tchap_translations.json, once we know the list is exact

// Keys that are present in translations files, but not in code
// uselessKeys = keysIni18nFiles - keysInCode
const inOursButNotInGenerated = keysIni18nFiles.filter(x => !keysInCode.includes(x));
console.log("These strings are in tchap_translations.json but not in the code :");
console.log(inOursButNotInGenerated);
// todo remove them from tchap_translations.json, once we know the list is exact
