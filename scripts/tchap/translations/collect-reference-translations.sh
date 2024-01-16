#!/bin/bash

# Collect translations from tchap's translation files and element's translation file, in both web and react-sdk repos,
# and merge them all together.

# Usage : merge_json_files file1 file2 outputfile
merge_json_files () {
    # Note : this works with nested keys.
    # Note : in case of conflict, the values in the file given in second argument will override.
    jq -s '.[0] * .[1]' $1 $2 > $3.tmp && mv $3.tmp $3
}

# Usage : format_json_file file
format_json_file () {
    # Format the file for clean diffing.
    jq --sort-keys '.' $1 > $1.tmp && mv $1.tmp $1 # yarn i18n:sort with customized files
}

# Usage : collect_reference_translations repo element_translation_file output_file
collect_reference_translations () {
    REPO=$1;
    ELEMENT_TRANSLATION_FILE=$2
    TCHAP_TRANSLATION_FILE=`realpath modules/tchap-translations/tchap_translations_${REPO}.json`
    REMOVED_TRANSLATION_FILE=`realpath modules/tchap-translations/tchap_translations_${REPO}_removed.json`

    TCHAP_TRANSLATION_EN_FILE=`realpath modules/tchap-translations/tmp/tchap_${REPO}_en.json`
    OUTPUT_FILE=$3

    node scripts/tchap/translations/extractENTranslations.js --file=$TCHAP_TRANSLATION_FILE > $TCHAP_TRANSLATION_EN_FILE

    # Merge tchap and element translations. Tchap values should override element values in case of conflict.
    merge_json_files $ELEMENT_TRANSLATION_FILE $TCHAP_TRANSLATION_EN_FILE $OUTPUT_FILE

    # Some keys have been removed from the code by patches. Remove these keys from the reference file.
    node scripts/tchap/translations/deleteRemovedTranslations.js --file=$OUTPUT_FILE --toremove=$REMOVED_TRANSLATION_FILE > $OUTPUT_FILE.tmp
    mv $OUTPUT_FILE.tmp $OUTPUT_FILE

    # Format the file for clean diffing.
    format_json_file $OUTPUT_FILE
}

mkdir -p `realpath modules/tchap-translations/tmp`
export OUTPUT_FILE_BOTH=`realpath modules/tchap-translations/tmp/merged_both.json` # todo pass this as argument

export REPO="web";
export ELEMENT_TRANSLATION_FILE=`realpath src/i18n/strings/en_EN.json`
export OUTPUT_FILE_WEB=`realpath modules/tchap-translations/tmp/merged_${REPO}.json`
collect_reference_translations $REPO $ELEMENT_TRANSLATION_FILE $OUTPUT_FILE_WEB

export REPO="react-sdk";
export ELEMENT_TRANSLATION_FILE=`realpath yarn-linked-dependencies/matrix-react-sdk/src/i18n/strings/en_EN.json`
export OUTPUT_FILE_REACT=`realpath modules/tchap-translations/tmp/merged_${REPO}.json`
collect_reference_translations $REPO $ELEMENT_TRANSLATION_FILE $OUTPUT_FILE_REACT

merge_json_files $OUTPUT_FILE_WEB $OUTPUT_FILE_REACT $OUTPUT_FILE_BOTH

# Format the file for clean diffing.
format_json_file $OUTPUT_FILE_BOTH

echo "Reference translations collected : $OUTPUT_FILE_BOTH"
