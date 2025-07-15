const { magenta, red, blue } = require("chalk");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function printUsersWithDelay(users, waitTime, option) {
  if (users.includes("errEmptyJson")) {
    return console.log(magenta(">"), red("Aucune ancienne donnée."));
  }
  if (option == "followback") {
    for (const user of users) {
      console.log(magenta(">"), red(`${user}`), magenta(`ne te suit pas en retour`));
      await delay(waitTime);
    }
  } else if (option == "unfollow") {
    for (const user of users) {
      console.log(magenta(">"), red(`${user}`), magenta(`t'a unfollow.`));
      await delay(waitTime);
    }
  } else if (option == "unfollowAndDelete") {
    for (const user of users) {
      console.log(magenta(">"), blue(`${user}`), magenta(`t'a supprimé.`));
      await delay(waitTime);
    }
  } else if (option == "requests") {
    for (const user of users) {
      console.log(magenta(">"), blue(`${user}`), magenta(`ne t'a pas accepté.`));
      await delay(waitTime);
    }
  }
}

module.exports = { printUsersWithDelay };
