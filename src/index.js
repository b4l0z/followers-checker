try {
  const chalk = require("chalk");
} catch (error) {
  return console.log("Modules non installés! Éxécutez installer.bat .\n\n");
}

const { checkFiles } = require("./functions/checkFiles");

//------------------------------ START
checkFiles();
