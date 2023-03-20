#!/bin/bash

set -e

# Variables
PROJECT_DIR=$(pwd)
PACKAGE_JSON="$PROJECT_DIR/package.json"
PATCHES_DIR="$PROJECT_DIR/patches"
TEMP_DIR="$PROJECT_DIR/temp"

# Logging function
function log() {
  local LOG_FILE=$1
  shift
  echo "$@" | tee -a "$LOG_FILE"
}

# Install the package function
function install_package() {
  local PACKAGE_NAME=$1
  local PACKAGE_VERSION=$2
  local PACKAGE_TEMP_DIR=$3
  local LOG_FILE=$4

  echo '{}' > package.json
  log "$LOG_FILE" "Installing $PACKAGE_NAME@$PACKAGE_VERSION"
  yarn add "$PACKAGE_NAME@$PACKAGE_VERSION" >>"$LOG_FILE" 2>&1
  log "$LOG_FILE" "Installing patch-package"
  yarn add patch-package >>"$LOG_FILE" 2>&1
}

# Extract version from package.json
function get_package_version() {
  local PACKAGE_NAME=$1
  python -c "import json; f = open('$PACKAGE_JSON'); data = json.load(f); f.close(); print(data['dependencies'].get('$PACKAGE_NAME', 'null'))"
}

# Check for conflict function
function check_conflict() {
  local CONFLICTS=$(grep -lr "<<<<<<<" "$1") || true
  [ -n "$CONFLICTS" ]
}

# Handle conflicts function
function handle_conflicts() {
  local PACKAGE_NAME=$1
  local LOG_FILE=$2
  local CONFLICTS_FOUND=false

  if check_conflict "node_modules/$PACKAGE_NAME"; then
    log "$LOG_FILE" "There were conflicts when applying the patch to $PACKAGE_NAME@$PACKAGE_VERSION."
    log "$LOG_FILE" "Resolve the conflicts manually and run the script again with the 'continue' command."
    log "$LOG_FILE" "Conflicted files:"
    grep -l "<<<<<<<" "node_modules/$PACKAGE_NAME" | tee -a "$LOG_FILE"
    CONFLICTS_FOUND=true
  fi

  return $CONFLICTS_FOUND
}

# Create and handle patch function
function create_and_handle_patch() {
  local PACKAGE_NAME=$1
  local PACKAGE_TEMP_DIR=$2
  local LOG_FILE=$3

  # Generate a new patch file
  yarn patch-package "$PACKAGE_NAME" >>"$LOG_FILE" 2>&1

  # Move the new patch file to the patches folder
  local PATCH_DIR="$PATCHES_DIR/$(basename "$PACKAGE_TEMP_DIR")"
  mkdir -p "$PATCH_DIR"
  mv patches/*.patch "$PATCH_DIR"

  # Clean up the package temp folder
  cd "$TEMP_DIR"
  rm -rf "$(basename "$PACKAGE_TEMP_DIR")"
  log "$LOG_FILE" "Patch created and temp folder cleaned"
}


# Function to init a new patch
function init_temp_folder_for_patch() {
  local PATCH_NAME=$1
  local PACKAGE_NAME=$2

  if [ -z "$PATCH_NAME" ] || [ -z "$PACKAGE_NAME" ]; then
    log "Usage: $0 create [patch_name] [package_name]"
    exit 1
  fi

  local PACKAGE_VERSION=$(get_package_version "$PACKAGE_NAME")
  local PACKAGE_DIR="$TEMP_DIR/$PATCH_NAME"
  local LOG_FILE="$PACKAGE_DIR.log"

  mkdir -p "$PACKAGE_DIR"
  cd "$PACKAGE_DIR"
  install_package "$PACKAGE_NAME" "$PACKAGE_VERSION" "$PACKAGE_DIR" "$LOG_FILE"
}

# Function to create a patch from the temp folder
function create_patch_from_temp() {
  local PATCH_NAME=$1
  local PACKAGE_NAME=$2

  if [ -z "$PATCH_NAME" ] || [ -z "$PACKAGE_NAME" ]; then
    log "Usage: $0 create [patch_name] [package_name]"
    exit 1
  fi

  local PACKAGE_TEMP_DIR="$TEMP_DIR/$PATCH_NAME"
  local LOG_FILE="$PACKAGE_TEMP_DIR.log"

  if [ ! -d "$PACKAGE_TEMP_DIR" ]; then
    log "Temp folder for patch '$PATCH_NAME' not found. Run the script with 'init' command first."
    exit 1
  fi

  cd "$PACKAGE_TEMP_DIR"

  # Call create_and_handle_patch function to create the patch and handle cleanup
  create_and_handle_patch "$PACKAGE_NAME" "$PACKAGE_TEMP_DIR" "$LOG_FILE"
}


function merge_patches() {
  local CONFLICTS_FOUND=false

  # Iterate through the patch files
  for PATCH_PATH in "$PATCHES_DIR"/*/*.patch; do
    local PATCH_DIR=$(basename "$(dirname "$PATCH_PATH")")
    local PATCH_FILE=$(basename "$PATCH_PATH")
    local PACKAGE_NAME=$(echo "$PATCH_FILE" | cut -d'+' -f1)
    local PACKAGE_VERSION=$(get_package_version "$PACKAGE_NAME")
    local LOG_FILE="$TEMP_DIR/$PATCH_DIR.log"
    log "$LOG_FILE" "# Manage $PATCH_PATH"

    # Check if the package version exists and if the patch needs to be updated
    if [ "$PACKAGE_VERSION" == "null" ] || [[ "$PATCH_FILE" =~ "$PACKAGE_NAME+$PACKAGE_VERSION".patch ]]; then
      log "$LOG_FILE" "Package '$PACKAGE_NAME' not found in package.json or patch already up-to-date. Skipping patch update."
      continue
    fi

    # Create a subfolder for the current package inside the temporary directory
    local PACKAGE_TEMP_DIR="$TEMP_DIR/$PATCH_DIR"
    if [ -d "$PACKAGE_TEMP_DIR" ]; then
      log "$LOG_FILE" "$PACKAGE_TEMP_DIR already exist, skipping patch update. Remove it to regenerate."
      continue
    fi

    mkdir -p "$PACKAGE_TEMP_DIR"
    cd "$PACKAGE_TEMP_DIR"
    install_package "$PACKAGE_NAME" "$PACKAGE_VERSION" "$PACKAGE_TEMP_DIR" "$LOG_FILE"

    # Apply the patch with --merge option
    patch -p1 --no-backup-if-mismatch --input="$PATCH_PATH" --forward --merge >>"$LOG_FILE" 2>&1 || true

    # Check for conflicts
    if handle_conflicts "$PACKAGE_NAME" "$LOG_FILE"; then
      CONFLICTS_FOUND=true
    else
      create_and_handle_patch "$PACKAGE_NAME" "$PACKAGE_TEMP_DIR" "$LOG_FILE"
    fi
  done

  if [ "$CONFLICTS_FOUND" = false ]; then
    log "All patches have been updated without conflicts."
    clean_temp_dir
  else
    log "Some patches have conflicts. After resolving the conflicts, run the script again with the 'continue' command."
  fi
}

function continue_patches() {
  local CONFLICTS_FOUND=false

  # Iterate through the package subfolders
  for PACKAGE_TEMP_DIR in "$TEMP_DIR"/*; do
    if [ ! -d "$PACKAGE_TEMP_DIR" ]; then
      continue
    fi

    local PATCH_DIR="$PATCHES_DIR/$(basename "$PACKAGE_TEMP_DIR")"
    local PATCH_PATH="$PATCH_DIR"/*.patch
    local PATCH_FILE=$(basename "$PATCH_PATH")
    local PACKAGE_NAME=$(echo "$PATCH_FILE" | cut -d'+' -f1)
    local LOG_FILE="$PACKAGE_TEMP_DIR.log"
    log "$LOG_FILE" "# Manage $PATCH_PATH"

    cd "$PACKAGE_TEMP_DIR"
    # Check for conflicts
    if handle_conflicts "$PACKAGE_NAME" "$LOG_FILE"; then
      CONFLICTS_FOUND=true
    else
      create_and_handle_patch "$PACKAGE_NAME" "$PACKAGE_TEMP_DIR" "$LOG_FILE"
    fi
  done

  if [ "$CONFLICTS_FOUND" = false ]; then
    log "All patches have been updated successfully."
    # Remove the temporary directory
    cd "$PROJECT_DIR"
    clean_temp_dir
  else
    log "Some patches still have conflicts. Resolve them and run the script again with the 'continue' command."
  fi
}

# Main function
function main() {
  local COMMAND=$1
  shift

  case "$COMMAND" in
  merge)
    merge_patches
    ;;
  continue)
    continue_patches
    ;;
  clean)
    clean_temp_dir
    ;;
  init)
    init_temp_folder_for_patch "$@"
    ;;
  create)
    create_patch_from_temp "$@"
    ;;
  *)
    log "Invalid command. Usage: $0 {merge|continue|clean|init|create}"
    exit 1
    ;;
  esac
}

main "$@"

