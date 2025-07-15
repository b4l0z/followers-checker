const fs = require("fs");
const path = require("path");

function checkFollowingBack() {
  const followersRaw = fs.readFileSync(path.resolve(__dirname, "../../data/current/followers_now.json"), "utf-8");
  const followingRaw = fs.readFileSync(path.resolve(__dirname, "../../data/current/following_now.json"), "utf-8");

  const followers = JSON.parse(followersRaw);
  const following = JSON.parse(followingRaw);

  let i = 0;
  let notFollowingBack = [];
  let followersArray = [];

  followers.forEach((follower) => {
    followersArray.push(follower.string_list_data[0]["value"]);
  });

  following.relationships_following.forEach((user) => {
    let followingUser = following.relationships_following[i]["string_list_data"][0]["value"];
    if (!followersArray.includes(followingUser)) {
      notFollowingBack.push(followingUser);
    }
    i++;
  });

  return notFollowingBack;
}

module.exports = { checkFollowingBack };
