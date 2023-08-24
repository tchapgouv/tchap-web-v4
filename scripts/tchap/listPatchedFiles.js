const fs = require("fs");

const patchFile = require("../../patches/patches.json");

Object.values(patchFile).forEach((patchInfo) => {
    patchInfo.files.forEach((file) => {
      console.log('yarn-linked-dependencies/' + patchInfo.package + '/' + file)
    })
});
