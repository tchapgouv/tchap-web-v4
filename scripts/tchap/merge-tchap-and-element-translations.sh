#!/bin/bash

# Use jq magic to convert { "key": { "en": "en value", "fr": "fr value"}} to { "key": "en value"}
# TODO: make this work with nested keys (new key format). tchap_translations_web has no nesting for now.
export TCHAP_TRANSLATION_FILE="modules/tchap-translations/tchap_translations_web.json"
export TCHAP_TRANSLATION_EN_FILE="modules/tchap-translations/tchap_translations_web_en.json"
cat $TCHAP_TRANSLATION_FILE | jq  'to_entries[] | { (.key): .value.en }' | jq -n '[inputs] | add' > $TCHAP_TRANSLATION_EN_FILE

# Keys from tchap_translations_web_EN_novalues.json
# TODO : remove if not used
#cat modules/tchap-translations/tchap_translations_web_EN_novalues.json| jq 'to_entries[] | .key'

# Merge tchap_translations_web_en.json with en_EN.json -> en_EN_withtchap.json. Tchap values should override element values in case of conflict.
# Note : this works with nested keys.
# Note : in command below, tchap values will overwrite because the thcap file is given in second position.
git checkout src/i18n/strings/en_EN.json # if you just ran this script, en_EN.json will be modified. Reset it.
export MERGED_TRANSLATION_FILE='src/i18n/strings/en_EN_withtchap.json'
jq -s '.[0] * .[1]' src/i18n/strings/en_EN.json $TCHAP_TRANSLATION_EN_FILE > $MERGED_TRANSLATION_FILE

# Format the file for clean diffing.
#"i18n:lint": "prettier --write src/i18n/strings/ --ignore-path /dev/null",
jq --sort-keys '.' $MERGED_TRANSLATION_FILE > $MERGED_TRANSLATION_FILE.tmp && mv $MERGED_TRANSLATION_FILE.tmp $MERGED_TRANSLATION_FILE # yarn i18n:sort with customized files
yarn i18n:lint # lints the whole src/i18n/strings/ dir, no need to modify

# Run the original gen-i18n script from matrix-web-i18n, with our file as input.
# gen-i18n crawls through the code files in src and res, looking for translations.
# For each translation key, it finds the values in INPUT_FILE. If no value found, value=key. It writes key:value in OUTPUT_FILE
export INPUT_FILE=$MERGED_TRANSLATION_FILE
export OUTPUT_FILE="src/i18n/strings/en_EN.json" # default value
yarn matrix-gen-i18n;
# TODO : fix error throw for "Tchap is not available at the moment %(errCode)s. <a>View the status of services</a>."
retVal=$?
if [ $retVal -ne 0 ]; then
    echo "gen-i18n failed. Aborting."
    exit $retVal
fi

# Format the file for clean diffing.
# Note : the file path is hardcoded for these commands. If you change OUTPUT_FILE it will break.
yarn i18n:sort && yarn i18n:lint

# diff en_EN_withtchap.json en_EN.json, and explode if they are different. (just change the file name from original script)
# "i18n:diff": "cp src/i18n/strings/en_EN.json src/i18n/strings/en_EN_orig.json && yarn i18n && matrix-compare-i18n-files src/i18n/strings/en_EN_orig.json src/i18n/strings/en_EN.json",
yarn matrix-compare-i18n-files $INPUT_FILE $OUTPUT_FILE
# Visualize if you like:
#diff $INPUT_FILE $OUTPUT_FILE

# Todo : load the 2 translations files in the module.