#!/bin/bash
export REPO="web";
export ELEMENT_TRANSLATION_FILE=`realpath src/i18n/strings/en_EN.json`

#export REPO="react-sdk";
#export ELEMENT_TRANSLATION_FILE=`realpath yarn-linked-dependencies/matrix-react-sdk/src/i18n/strings/en_EN.json`

# Inputs
export TCHAP_TRANSLATION_FILE=`realpath modules/tchap-translations/tchap_translations_${REPO}.json`
export REMOVED_TRANSLATION_FILE=`realpath modules/tchap-translations/tchap_translations_${REPO}_removed.json`

# Tmp files output
mkdir -p `realpath modules/tchap-translations/tmp`
export TCHAP_TRANSLATION_EN_FILE=`realpath modules/tchap-translations/tmp/tchap_${REPO}_en.json`
export MERGED_TRANSLATION_FILE=`realpath modules/tchap-translations/tmp/merged_${REPO}.json`
export CRAWLED_TRANSLATION_FILE=`realpath modules/tchap-translations/tmp/crawled_${REPO}.json`

# Extract EN translations only from tchap. Change format to be compatible with element's.
# We use jq magic to convert { "key": { "en": "en value", "fr": "fr value"}} to { "key": "en value"}
# Note : this works with nested keys.
#cat $TCHAP_TRANSLATION_FILE | jq  'to_entries[] | { (.key): .value.en }' | jq -n '[inputs] | add' > $TCHAP_TRANSLATION_EN_FILE # no nested keys
node scripts/tchap/translations/reformatTranslations.js --file=$TCHAP_TRANSLATION_FILE > $TCHAP_TRANSLATION_EN_FILE

# Merge tchap and element translatsions. Tchap values should override element values in case of conflict.
# Note : this works with nested keys.
# Note : in command below, tchap values will overwrite because the thcap file is given in second position.
jq -s '.[0] * .[1]' $ELEMENT_TRANSLATION_FILE $TCHAP_TRANSLATION_EN_FILE > $MERGED_TRANSLATION_FILE

# Remove the keys which have been commented out in patches.
node scripts/tchap/translations/deleteRemovedTranslations.js --file=$MERGED_TRANSLATION_FILE --toremove=$REMOVED_TRANSLATION_FILE > $MERGED_TRANSLATION_FILE.tmp
mv $MERGED_TRANSLATION_FILE.tmp $MERGED_TRANSLATION_FILE

# Format the file for clean diffing.
jq --sort-keys '.' $MERGED_TRANSLATION_FILE > $MERGED_TRANSLATION_FILE.tmp && mv $MERGED_TRANSLATION_FILE.tmp $MERGED_TRANSLATION_FILE # yarn i18n:sort with customized files
yarn i18n:lint # lints the whole src/i18n/strings/ dir, no need to modify

# Run the original gen-i18n script from matrix-web-i18n, with our file as input.
# gen-i18n crawls through the code files in src and res, looking for translations.
# For each translation key, it finds the values in INPUT_FILE. If no value found, value=key. It writes key:value in OUTPUT_FILE
export INPUT_FILE=$MERGED_TRANSLATION_FILE # var read by matrix-gen-i18n, don't rename
export OUTPUT_FILE=$CRAWLED_TRANSLATION_FILE # var read by matrix-gen-i18n, don't rename
if [[ "$REPO" == "react-sdk" ]]; then
    cd yarn-linked-dependencies/matrix-react-sdk
    yarn matrix-gen-i18n;
    cd ../../
else
    yarn matrix-gen-i18n;
fi
retVal=$?
if [ $retVal -ne 0 ]; then
    echo "gen-i18n failed. Aborting."
    exit $retVal
fi
# Todo we should probably abort in more places, set it in the script's settings

# Format the file for clean diffing.
jq --sort-keys '.' $OUTPUT_FILE > $OUTPUT_FILE.tmp && mv $OUTPUT_FILE.tmp $OUTPUT_FILE # yarn i18n:sort with customized files
yarn i18n:lint # lints the whole src/i18n/strings/ dir, no need to modify

# diff en_EN_withtchap.json en_EN.json, and explode if they are different. (just change the file name from original script)
echo "Comparing:"
echo "diff $INPUT_FILE $OUTPUT_FILE"
yarn matrix-compare-i18n-files $INPUT_FILE $OUTPUT_FILE
# Visualize if you like:
#diff $INPUT_FILE $OUTPUT_FILE
