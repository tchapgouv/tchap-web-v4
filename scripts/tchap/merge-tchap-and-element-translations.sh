#!/bin/bash

# Use jq magic to convert { "key": { "en": "en value", "fr": "fr value"}} to { "key": "en value"}
# TODO: make this work with nested keys (new key format). tchap_translations has no nesting for now.
cat modules/tchap-translations/tchap_translations.json | jq  'to_entries[] | { (.key): .value.en }' | jq -n '[inputs] | add' > modules/tchap-translations/tchap_translations_en.json

# Keys from tchap_translations_web_EN_novalues.json
#cat modules/tchap-translations/tchap_translations_web_EN_novalues.json| jq 'to_entries[] | .key'

# Merge tchap_translations_en.json with en_EN.json -> en_EN_withtchap.json. Tchap values should override element values in case of conflict.
# Note : this works with nested keys.
# Note : in command below, tchap values will overwrite because the thcap file is given in second position.
jq -s '.[0] * .[1]' src/i18n/strings/en_EN.json modules/tchap-translations/tchap_translations_en.json > src/i18n/strings/en_EN_withtchap.json
