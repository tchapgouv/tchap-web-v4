const patchFile = require('../patches/patches.json');

if (process.argv.length !== 3) {
  console.log("\nMissing patch name.");
  console.log("Usage : node makePatch.js my-patch-name");
  console.log("my-patch-name should be listed in patches/patches.json");
  console.log("Known patch names :", Object.keys(patchFile));
  console.log("Aborting.\n");
  process.exit(1);
}

const checkPatchFile = (patchFile) => {
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
checkPatchFile(patchFile);

const patchName = process.argv[2];
const patchInfo = patchFile[patchName];
if (!patchInfo) {
  console.log("Your patch name is not listed in patches/patches.json. Aborting.");
  process.exit(1);
}

const fileList = patchInfo.files.join('|');
const command = `yarn patch-package --patch-dir patches/${patchName} --include "${fileList}"  ${patchInfo.package}`;

var child = require('child_process').exec(command);
// use event hooks to provide a callback to execute when data are available:
child.stdout.on('data', function(data) {
  console.log(data.toString());
});
child.stderr.on('data', function(data) {
  console.error(data.toString());
});
