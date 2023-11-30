#!/bin/bash

# Use jq magic to convert { "key": { "en": "en value", "fr": "fr value"}} to { "key": "en value"}
# TODO: make this work with nested keys (new key format)
cat modules/tchap-translations/tchap_translations.json | jq  'to_entries[] | { (.key): .value.en }' | jq -n '[inputs] | add'