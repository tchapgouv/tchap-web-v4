#!/bin/bash

# Use jq magic to convert { "key": { "en": "en value", "fr": "fr value"}} to { "key": "en value"}
# TODO: make this work with nested keys (new key format). tchap_translations_web has no nesting for now.
cat modules/tchap-translations/tchap_translations_web.json | jq  'to_entries[] | { (.key): .value.en }' | jq -n '[inputs] | add' > modules/tchap-translations/tchap_translations_web_en.json

# Keys from tchap_translations_web_EN_novalues.json
# TODO : remove if not used
#cat modules/tchap-translations/tchap_translations_web_EN_novalues.json| jq 'to_entries[] | .key'

# Merge tchap_translations_web_en.json with en_EN.json -> en_EN_withtchap.json. Tchap values should override element values in case of conflict.
# Note : this works with nested keys.
# Note : in command below, tchap values will overwrite because the thcap file is given in second position.
jq -s '.[0] * .[1]' src/i18n/strings/en_EN.json modules/tchap-translations/tchap_translations_web_en.json > src/i18n/strings/en_EN_withtchap.json
export INPUT_FILE="src/i18n/strings/en_EN_withtchap.json"

# Format the file for clean diffing.
#"i18n:lint": "prettier --write src/i18n/strings/ --ignore-path /dev/null",
jq --sort-keys '.' $INPUT_FILE > $INPUT_FILE.tmp && mv $INPUT_FILE.tmp $INPUT_FILE # yarn i18n:sort with customized files
yarn i18n:lint

# Run the original gen-i18n script from matrix-web-i18n, with our file as input.
# gen-i18n crawls through the code files in src and res, looking for translations.
# For each translation key, it finds the values in INPUT_FILE. If no value found, value=key. It writes key:value in OUTPUT_FILE
export OUTPUT_FILE="src/i18n/strings/en_EN.json" # default value
yarn matrix-gen-i18n;
# TODO : fix error throw for "Tchap is not available at the moment %(errCode)s. <a>View the status of services</a>."
retVal=$?
if [ $retVal -ne 0 ]; then
    echo "gen-i18n failed. Aborting."
fi
exit $retVal

# Format the file for clean diffing.
# Note : the file path is hardcoded for these commands. If you change OUTPUT_FILE it will break.
yarn i18n:sort && yarn i18n:lint

# diff en_EN_withtchap.json en_EN.json, and explode if they are different. (just change the file name from original script)
# "i18n:diff": "cp src/i18n/strings/en_EN.json src/i18n/strings/en_EN_orig.json && yarn i18n && matrix-compare-i18n-files src/i18n/strings/en_EN_orig.json src/i18n/strings/en_EN.json",
yarn matrix-compare-i18n-files $INPUT_FILE $OUTPUT_FILE
# Visualize if you like:
#diff $INPUT_FILE $OUTPUT_FILE
