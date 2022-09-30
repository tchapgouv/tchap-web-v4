const patchFile = require('../patches/patches.json');

if (process.argv.length !== 3) {
  console.log("\nMissing patch name.");
  console.log("Usage : node makePatch.js my-patch-name");
  console.log("my-patch-name should be listed in patches/patches.json");
  console.log("Known patch names :", Object.keys(patchFile));
  console.log("Aborting.\n");
  return
}

const patchName = process.argv[2];
const patchInfo = patchFile[patchName];
if (!patchInfo) {
  console.log("Your patch name is not listed in patches/patches.json. Aborting.");
  return
}

const fileList = patchInfo.files.join('|');
const command = `yarn patch-package --patch-dir patches/${patchName} --include "${fileList}"  ${patchInfo.package}`;

var child = require('child_process').exec(command);
// use event hooks to provide a callback to execute when data are available:
child.stdout.on('data', function(data) {
  console.log(data.toString());
});
