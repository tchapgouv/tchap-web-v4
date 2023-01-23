function checkForDuplicateFiles(patchFile) {
  console.log("Checking patch file for files that are patched twice...");
  const findFirstDuplicate = (arr) => {
    const sortedArr = arr.slice().sort();
    for (let i = 0; i < sortedArr.length - 1; i++) {
      if (sortedArr[i + 1] == sortedArr[i]) {
        return sortedArr[i];
      }
    }
    return;
  }

  let fileList = []
  Object.values(patchFile).forEach(patchInfo => {
    fileList = fileList.concat(patchInfo.files);
  });
  const dup = findFirstDuplicate(fileList);
  if (dup) {
    console.error("This file is used in two different patches:", dup);
    console.error("The changes of the two packages will be mixed up. Don't do this.");
    process.exit(1);
  }
  console.log("... no files that are patched twice.");
};

function checkForMissingPatchDirs(patchFile) {
  console.log("Checking for missing patch directories...");
  const patchDirs = []; // todo list dirs
  Object.keys(patchFile).forEach(patchName => {
    const found = patchDirs.find(patchDir => patchDir = patchName);
    if (!found) {
      console.error("\nPATCH PROBLEM!")
      console.error("The patch", patchName, "is listed in patches.json but there is no corresponding directory in /patches.");
      console.error("Either remove it from patches.json, or use yarn patch-make to make the missing patch file.");
      console.error("\n");
      process.exit(1);
    }
  });
  console.log("... no missing patch directories.");
}

const patchFile = require('../patches/patches.json');
checkForDuplicateFiles(patchFile);
checkForMissingPatchDirs(patchFile);
