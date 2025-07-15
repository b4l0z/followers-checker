const { red, magenta, blue } = require("chalk");

const fs = require("fs");
const path = require("path");

function compare(option) {
  const followersOldPath = path.resolve(__dirname, "../../data/current/followers_old.json");
  const followingOldPath = path.resolve(__dirname, "../../data/current/following_old.json");

  if (!fs.existsSync(followersOldPath) || !fs.existsSync(followingOldPath)) {
    console.log(red("❌ Les fichiers précédents sont manquants. Tu dois lancer une première comparaison pour les générer."));
    return ["errMissingOldData"];
  }

  const nowFollowersRaw = fs.readFileSync(path.resolve(__dirname, "../../data/current/followers_now.json"), "utf-8");
  const nowFollowingRaw = fs.readFileSync(path.resolve(__dirname, "../../data/current/following_now.json"), "utf-8");
  const oldFollowersRaw = fs.readFileSync(path.resolve(__dirname, "../../data/current/followers_old.json"), "utf-8");
  const oldFollowingRaw = fs.readFileSync(path.resolve(__dirname, "../../data/current/following_old.json"), "utf-8");

  const nowFollowers = JSON.parse(nowFollowersRaw);
  const nowFollowing = JSON.parse(nowFollowingRaw);
  const oldFollowers = JSON.parse(oldFollowersRaw);
  const oldFollowing = JSON.parse(oldFollowingRaw);

  let array = [];
  if (Object.keys(oldFollowers).length === 0 && oldFollowers.constructor === Object) {
    array.push("errEmptyJson");
    return array;
  }
  let oldFollowersArray = [];
  oldFollowers.forEach((user) => {
    oldFollowersArray.push(user.string_list_data[0].value);
  });

  let oldFollowingArray = [];
  oldFollowing.relationships_following.forEach((user) => {
    oldFollowingArray.push(user.string_list_data[0].value);
  });

  let nowFollowersArray = [];
  nowFollowers.forEach((user) => {
    nowFollowersArray.push(user.string_list_data[0].value);
  });

  let nowFollowingArray = [];
  nowFollowing.relationships_following.forEach((user) => {
    nowFollowingArray.push(user.string_list_data[0].value);
  });

  if (option == "unfollow") {
    oldFollowersArray.forEach((user) => {
      if (!nowFollowersArray.includes(user)) {
        if (nowFollowingArray.includes(user)) {
          array.push(user);
        }
      }
    });
  }
  if (option == "unfollowAndDelete") {
    oldFollowersArray.forEach((user) => {
      if (!nowFollowersArray.includes(user)) {
        if (!nowFollowingArray.includes(user)) {
          array.push(user);
        }
      }
    });
  }
  return array;
}

module.exports = { compare };
