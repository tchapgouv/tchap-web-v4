#!/bin/bash

# Crawl through the code, find translation strings, find corresponding translations in reference file, and write everything
# to the output file.
# Usage : ./scripts/tchap/translations/crawl-for-translations.sh $REFERENCE_TRANSLATIONS $OUTPUT

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

# Usage : crawl repo inputfile outputfile
crawl () {
    export repo=$1
    # Run the original gen-i18n script from matrix-web-i18n.
    # gen-i18n crawls through the code files in src and res, looking for translations.
    # For each translation key, it finds the values in INPUT_FILE. If no value found, it uses value=key.
    # Then it writes key:value in OUTPUT_FILE.
    export INPUT_FILE=$2 # var read by matrix-gen-i18n, don't rename
    export OUTPUT_FILE=$3 # var read by matrix-gen-i18n, don't rename
    if [[ "$repo" == "react-sdk" ]]; then
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
}


mkdir -p `realpath modules/tchap-translations/tmp`

export REFERENCE_TRANSLATIONS=$1
# Output
export CRAWLED=$2

# Repo web
export REPO="web";
export CRAWLED_WEB=`realpath modules/tchap-translations/tmp/crawled_${REPO}.json`
crawl $REPO $REFERENCE_TRANSLATIONS $CRAWLED_WEB

# Repo react-sdk
export REPO="react-sdk";
export CRAWLED_REACT=`realpath modules/tchap-translations/tmp/crawled_${REPO}.json`
crawl $REPO $REFERENCE_TRANSLATIONS $CRAWLED_REACT

merge_json_files $CRAWLED_WEB $CRAWLED_REACT $CRAWLED

# Extra hack : config.json is not crawled by matrix-gen-i18n, so the terms_and_conditions_links are missing. Add them in.
# Get the terms_and_conditions strings from config.json
export TOC_TRANSLATIONS=`realpath modules/tchap-translations/tmp/terms_and_conditions_EN.json`
jq '.terms_and_conditions_links[] | { (.text): .text} ' config.json | jq -s add > $TOC_TRANSLATIONS
merge_json_files $TOC_TRANSLATIONS $CRAWLED $CRAWLED

# Format the file for clean diffing.
format_json_file $CRAWLED

echo "Crawled and found these translations : $CRAWLED"
