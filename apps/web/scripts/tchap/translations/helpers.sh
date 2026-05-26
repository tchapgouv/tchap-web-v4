#!/bin/bash

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
