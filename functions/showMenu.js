const { magenta, bgRedBright, blue } = require("chalk");
const { printUsersWithDelay } = require("../functions/printUsersWithDelay");
const { checkFollowingBack } = require("../functions/checkFollowingBack");
const { checkFollowingRequests } = require("../functions/checkFollowingRequests");
const { compare } = require("../functions/compare");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function showMenu() {
  console.log(magenta("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"));
  console.log(magenta(">"), magenta("[1]"), blue(`Qui ne me followback pas`));
  console.log(magenta(">"), magenta("[2]"), blue(`Qui m'a unfollow`));
  console.log(magenta(">"), magenta("[3]"), blue(`Qui m'a supprimé`));
  console.log(magenta(">"), magenta("[4]"), blue(`Demande de suivi non-acceptées`));

  rl.question(magenta("\n>>> "), async (reponse) => {
    if (reponse == "1") {
      console.clear();
      setTimeout(async () => {
        console.log(bgRedBright(`PERSONNES QUI NE TE SUIVENT PAS EN RETOUR : \n`));
        await printUsersWithDelay(checkFollowingBack(), 100, "followback");
        console.log("\n");
        showMenu(); // REVIENT AU MENU APRÈS AFFICHAGE
      }, 500);
    } else if (reponse == "2") {
      console.clear();
      setTimeout(async () => {
        console.log(bgRedBright(`PERSONNES QUI T'ONT SUPPRIMÉ : \n`));
        await printUsersWithDelay(compare("unfollow"), 100, "unfollow");
        console.log("\n");
        showMenu(); // REVIENT AU MENU APRÈS AFFICHAGE
      }, 500);
    } else if (reponse == "3") {
      console.clear();
      setTimeout(async () => {
        console.log(bgRedBright(`PERSONNES QUI T'ONT SUPPRIMÉ : \n`));
        await printUsersWithDelay(compare("unfollowAndDelete"), 100, "unfollowAndDelete");
        console.log("\n");
        showMenu(); // REVIENT AU MENU APRÈS AFFICHAGE
      }, 500);
    } else if (reponse == "4") {
      console.clear();
      setTimeout(async () => {
        console.log(bgRedBright(`DEMANDES DE SUIVI NON-ACCEPTÉES : \n`));
        await printUsersWithDelay(checkFollowingRequests(), 100, "requests");
        console.log("\n");
        showMenu();
      }, 500);
    } else {
      showMenu(); // sinon on revient direct au menu
    }
  });
}

module.exports = { showMenu };
