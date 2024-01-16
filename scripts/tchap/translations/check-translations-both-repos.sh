#!/bin/bash

./scripts/tchap/translations/collect-reference-translations.sh
export REFERENCE_TRANSLATIONS=`realpath modules/tchap-translations/tmp/merged_both.json` # todo pass this as argument

./scripts/tchap/translations/crawl-for-translations.sh
export CRAWLED=`realpath modules/tchap-translations/tmp/crawled_both.json` # todo pass this as argument

# Diff the two.
echo "Comparing:"
echo "diff $REFERENCE_TRANSLATIONS $CRAWLED"
yarn matrix-compare-i18n-files $REFERENCE_TRANSLATIONS $CRAWLED
