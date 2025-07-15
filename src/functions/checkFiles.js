const fs = require("fs");
const { magenta, blue, red } = require("chalk");

//------------------------------ FUNCTIONS
const { displayTitle } = require("../functions/displayTitle");
const { showMenu } = require("../functions/showMenu");

function checkFiles() {
  const hasFollowers = fs.existsSync("followers_1.json");
  const hasFollowing = fs.existsSync("following.json") || fs.existsSync("following_1.json");
  const hasPendingRequests = fs.existsSync("pending_follow_requests.json");

  const followingFile = fs.existsSync("following_1.json") ? "following_1.json" : "following.json";

  if (!hasFollowers) {
    return console.log(red(`Le fichier`), magenta("followers_1.json"), red("est manquant."));
  }
  if (!hasFollowing) {
    return console.log(red(`Le fichier`), magenta("following.json / following_1.json"), red("est manquant."));
  }
  if (!hasPendingRequests) {
    return console.log(red(`Le fichier`), magenta("pending_follow_requests.json"), red("est manquant."));
  }

  try {
    // Suppression des anciens
    if (fs.existsSync("./data/current/followers_old.json")) {
      fs.unlinkSync("./data/current/followers_old.json");
    }
    if (fs.existsSync("./data/current/following_old.json")) {
      fs.unlinkSync("./data/current/following_old.json");
    }

    // Déplacement des fichiers actuels vers _old
    if (fs.existsSync("./data/current/followers_now.json")) {
      fs.renameSync("./data/current/followers_now.json", "./data/current/followers_old.json");
    }

    if (fs.existsSync("./data/current/following_now.json")) {
      fs.renameSync("./data/current/following_now.json", "./data/current/following_old.json");
    }

    // Copie des nouveaux
    fs.copyFileSync("followers_1.json", "./data/current/followers_now.json");
    fs.copyFileSync(followingFile, "./data/current/following_now.json");
    fs.copyFileSync("pending_follow_requests.json", "./data/current/pending_follow_requests.json");

    // Suppression des fichiers importés
    fs.unlinkSync("followers_1.json");
    fs.unlinkSync(followingFile);
    fs.unlinkSync("pending_follow_requests.json");

    displayTitle();
    console.log(magenta(">"), blue("Chargement des données..."));

    setTimeout(() => {
      const followers = JSON.parse(fs.readFileSync("./data/current/followers_now.json", "utf-8"));
      const following = JSON.parse(fs.readFileSync("./data/current/following_now.json", "utf-8"));

      console.log(magenta(">"), blue(`${followers.length}`), magenta(`followers`));
      console.log(magenta(">"), blue(`${following.relationships_following.length}`), magenta(`following\n`));

      showMenu();
    }, 1000);
  } catch (err) {
    console.log(red("❌ Une erreur est survenue :"), err.message);
  }
}

module.exports = { checkFiles };
