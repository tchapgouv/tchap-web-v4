#!/bin/bash

set -e

# Variables
PROJECT_DIR=$(pwd)
PACKAGE_JSON="$PROJECT_DIR/package.json"
PATCHES_DIR="$PROJECT_DIR/patches"
TEMP_DIR="$PROJECT_DIR/temp"

function merge_patches() {
  CONFLICTS_FOUND=false

  # Iterate through the patch files
  for PATCH_PATH in "$PATCHES_DIR"/*/*.patch; do
    PATCH_DIR=$(basename "$(dirname "$PATCH_PATH")")
    PATCH_FILE=$(basename $PATCH_PATH)    
    PACKAGE_NAME=$(echo "$PATCH_FILE" | cut -d'+' -f1)
    PACKAGE_VERSION=$(jq -r ".dependencies.\"$PACKAGE_NAME\"" "$PACKAGE_JSON")
    echo "# Manage $PATCH_PATH"

    # Check if the package version exists and if the patch needs to be updated
    if [ "$PACKAGE_VERSION" == "null" ] || [[ "$PATCH_FILE" =~ "$PACKAGE_NAME+$PACKAGE_VERSION".patch ]]; then
      echo "Package '$PACKAGE_NAME' not found in package.json or patch already up-to-date. Skipping patch update."
      continue
    fi

    # Create a subfolder for the current package inside the temporary directory
    PACKAGE_TEMP_DIR="$TEMP_DIR/$PATCH_DIR"
    mkdir -p "$PACKAGE_TEMP_DIR"
    LOG_FILE=$PACKAGE_TEMP_DIR/result.log

    # Install the package in the package subfolder
    cd "$PACKAGE_TEMP_DIR"
    echo '{ }' > package.json
    yarn add "$PACKAGE_NAME@$PACKAGE_VERSION" > $LOG_FILE 2>&1
    yarn add patch-package > $LOG_FILE 2>&1

    # Apply the patch with --merge option
    patch -p1 --no-backup-if-mismatch --input="$PATCH_PATH" --forward --merge 2>&1 > $LOG_FILE || true

    # Check for conflicts
    CONFLICTS=$(grep -lr "<<<<<<<" node_modules/"$PACKAGE_NAME") || true

    # If there are conflicts, inform the user
    if [ -n "$CONFLICTS" ]; then
      echo "There were conflicts when applying the patch to $PACKAGE_NAME@$PACKAGE_VERSION."
      echo "Resolve the conflicts manually and run the script again with the 'continue' command."
      echo "Conflicted files:"
      echo "$CONFLICTS"
      CONFLICTS_FOUND=true
    else
      # If there are no conflicts, generate a new patch file
      yarn patch-package "$PACKAGE_NAME" > $LOG_FILE 2>&1

      # Move the new patch file to the old patch file's location
      mv patches/"$PACKAGE_NAME"*.patch "$(dirname $PATCH_PATH)"
      rm $PATCH_PATH

      # Clean up the package subfolder
      cd "$TEMP_DIR"
      rm -rf "$PATCH_DIR"
      echo "Patch Done and temp file cleaned"
    fi
    echo ""
  done

  if [ "$CONFLICTS_FOUND" = false ]; then
    echo "All patches have been updated without conflicts."
    clean_temp_dir
  else
    echo "Some patches have conflicts. After resolving the conflicts, run the script again with the 'continue' command."
  fi
}

function continue_patches() {
  CONFLICTS_FOUND=false

  # Iterate through the package subfolders
  for PACKAGE_TEMP_DIR in "$TEMP_DIR"/*; do
    echo "# Manage $PATCH_PATH"
    PATCH_DIR="$PATCHES_DIR/$(basename "$PACKAGE_TEMP_DIR")"
    PATCH_PATH="$PATCH_DIR"/*.patch
    PATCH_FILE=$(basename $PATCH_PATH)    
    PACKAGE_NAME=$(echo "$PATCH_FILE" | cut -d'+' -f1)

    # Check for conflicts
    CONFLICTS=$(grep -lr "<<<<<<<" "$PACKAGE_TEMP_DIR/node_modules/$PACKAGE_NAME") || true

    # If there are conflicts, inform the user
    if [ -n "$CONFLICTS" ]; then
      echo "There are still conflicts in the patch for $PACKAGE_NAME."
      echo "Resolve the conflicts manually and run the script again with the 'continue' command."
      echo "Conflicted files:"
      echo "$CONFLICTS"
      CONFLICTS_FOUND=true
    else
      # If there are no conflicts, generate a new patch file
      cd "$PACKAGE_TEMP_DIR"
      yarn patch-package "$PACKAGE_NAME"

      # Move the new patch file to the old patch file's location
      mv patches/"$PACKAGE_NAME"*.patch "$(dirname $PATCH_PATH)"

      # Clean up the package subfolder
      cd "$TEMP_DIR"
      rm -rf "$(basename "$PACKAGE_TEMP_DIR")"
    fi
  done

  if [ "$CONFLICTS_FOUND" = false ]; then
    echo "All patches have been updated successfully."
    # Remove the temporary directory
    cd "$PROJECT_DIR"
    clean_temp_dir
  else
    echo "Some patches still have conflicts. Resolve them and run the script again with the 'continue' command."
  fi
}

function clean_temp_dir() {
  rm -rf "$TEMP_DIR"
}

# Check the command line argument for "merge", "continue", or "clean"
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 {merge|continue|clean}"
  exit 1
fi

if [ "$1" == "merge" ]; then
  merge_patches
elif [ "$1" == "continue" ]; then
  continue_patches
elif [ "$1" == "clean" ]; then
  clean_temp_dir
else
  echo "Invalid command. Usage: $0 {merge|continue|clean}"
  exit 1
fi

