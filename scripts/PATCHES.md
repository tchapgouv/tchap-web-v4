# Patch Manager Script

This script helps you manage patches for your project. It's especially useful when you need to apply multiple patches to a single package, or when you need to update a package and reapply the patches.

## Usage

### Merging Patches

To merge patches, run:

```sh
./scripts/patches.sh merge
```

This command will go through all patches in the patches folder and update them if needed. If there are any conflicts, the script will stop and ask you to resolve them manually.

#### Continuing After Conflict Resolution
Once you've resolved conflicts, run:

```sh
./scripts/patches.sh continue
```

This command will continue applying patches and updating them as needed.

### Cleaning the Temporary Directory
To clean the temporary directory, run:

```sh
./scripts/patches.sh clean
```

### Patch Creation
To initialize a temporary folder for creating a new patch, run:

```sh
./scripts/patche.sh init [patch_name] [package_name]
```

Creating a Patch from the Temporary Folder

```
./scripts/patche.sh create [patch_name] [package_name]
```

## Notes

- Make sure to commit the changes to your patches folder after updating or creating patches.
- The script assumes you're using yarn as your package manager. If you're using a different package manager, you'll need to modify the script accordingly.
- Ensure you have Python installed on your system for the script to work correctly.
- You need an environment with patch that support `--merge` option, you use linux or docker with `docker run -ti -v "$(pwd):/home/node" node:16 /bin/bash`
