#!/bin/bash

# Run check-translations.sh once for each repo, then this script.
# TODO : merge both scripts.

export MERGED_BOTH=`realpath modules/tchap-translations/tmp/merged_both.json`
export CRAWLED_BOTH=`realpath modules/tchap-translations/tmp/crawled_both.json`

export MERGED_WEB=`realpath modules/tchap-translations/tmp/merged_web.json`
export MERGED_REACT=`realpath modules/tchap-translations/tmp/merged_react-sdk.json`
export CRAWLED_WEB=`realpath modules/tchap-translations/tmp/crawled_web.json`
export CRAWLED_REACT=`realpath modules/tchap-translations/tmp/crawled_react-sdk.json`

# Merge the merged files from both repos
# Note : this works with nested keys.
jq -s '.[0] * .[1]' $MERGED_WEB $MERGED_REACT > $MERGED_BOTH
# Format the file for clean diffing.
jq --sort-keys '.' $MERGED_BOTH > $MERGED_BOTH.tmp && mv $MERGED_BOTH.tmp $MERGED_BOTH # yarn i18n:sort with customized files
yarn i18n:lint # lints the whole src/i18n/strings/ dir, no need to modify # todo is this useful ?

# Merge the crawled files from both repos
# Note : this works with nested keys.
jq -s '.[0] * .[1]' $CRAWLED_WEB $CRAWLED_REACT > $CRAWLED_BOTH

# Extra hack : config.json is not crawled by matrix-gen-i18n, the terms_and_conditions_links are missing. Add them in.
# Get the terms_and_conditions strings from config.json
export TOC=`realpath modules/tchap-translations/tmp/terms_and_conditions.json`
jq '.terms_and_conditions_links[] | { (.text): .text} ' config.json | jq -s add > $TOC
# Merge them into CRAWLED_BOTH
# Note : this works with nested keys.
jq -s '.[0] * .[1]' $TOC $CRAWLED_BOTH > $CRAWLED_BOTH.tmp && mv $CRAWLED_BOTH.tmp $CRAWLED_BOTH

# Format the file for clean diffing.
jq --sort-keys '.' $CRAWLED_BOTH > $CRAWLED_BOTH.tmp && mv $CRAWLED_BOTH.tmp $CRAWLED_BOTH # yarn i18n:sort with customized files
yarn i18n:lint # lints the whole src/i18n/strings/ dir, no need to modify # todo is this useful ?

# Diff the two.
echo "Comparing:"
echo "diff $MERGED_BOTH $CRAWLED_BOTH"
yarn matrix-compare-i18n-files $MERGED_BOTH $CRAWLED_BOTH
