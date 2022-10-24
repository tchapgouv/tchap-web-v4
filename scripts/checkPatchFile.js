function checkPatchFile(patchFile) {
  console.log("Checking patch file is valid...");
  const findFirstDuplicate = (arr) => {
    let sorted_arr = arr.slice().sort();
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] == sorted_arr[i]) {
        return sorted_arr[i];
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
  console.log("... patch file is valid.");
};

const patchFile = require('../patches/patches.json');
checkPatchFile(patchFile);
