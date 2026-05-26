#!/bin/bash

## How does this work ? See modules/tchap-translations/README.md

mkdir -p `realpath modules/tchap-translations/tmp`

export REFERENCE_TRANSLATIONS=`realpath modules/tchap-translations/tmp/reference.json`
./scripts/tchap/translations/collect-reference-translations.sh $REFERENCE_TRANSLATIONS

export CRAWLED=`realpath modules/tchap-translations/tmp/crawled.json`
./scripts/tchap/translations/crawl-for-translations.sh $REFERENCE_TRANSLATIONS $CRAWLED

# Diff the two.
echo "Comparing:"
echo "diff $REFERENCE_TRANSLATIONS $CRAWLED"
yarn matrix-compare-i18n-files $REFERENCE_TRANSLATIONS $CRAWLED
