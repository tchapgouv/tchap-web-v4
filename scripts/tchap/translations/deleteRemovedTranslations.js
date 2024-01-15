
const parseArgs = require("minimist");

const argv = parseArgs(process.argv.slice(2), {});
const tchapTranslations = require(argv.file);
const toRemove = require(argv.toremove);

for (const key of toRemove) {
  // We could have key = "auth|do_stuff", in which case we should deal with the nesting.
  const keyPieces = key.split("|");
  // Officially the ugliest piece of script of all tchap. Use some elegant recursive crap or ES6 voodoo.
  switch (keyPieces.length) {
    case 1:
      delete tchapTranslations[keyPieces[0]];
      break;
    case 2:
      delete tchapTranslations[keyPieces[0]][keyPieces[1]];
      break;
    case 3:
      delete tchapTranslations[keyPieces[0]][keyPieces[1]][keyPieces[2]];
      break;
    case 4:
      delete tchapTranslations[keyPieces[0]][keyPieces[1]][keyPieces[2]][keyPieces[3]];
      break;
    case 5:
      delete tchapTranslations[keyPieces[0]][keyPieces[1]][keyPieces[2]][keyPieces[3]][keyPieces[4]];
      break;
    default:
      // I'm counting on this never happening.
      throw new Error("More than 5 layers of nesting of translations??? Adapt the script.");
  }
}

console.log(JSON.stringify(tchapTranslations));
