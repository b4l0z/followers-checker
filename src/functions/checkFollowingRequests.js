const fs = require("fs");
const path = require("path");

function checkFollowingRequests() {
  const requestsFile = fs.readFileSync(path.resolve(__dirname, "../../data/current/pending_follow_requests.json"), "utf-8");

  const requests = JSON.parse(requestsFile);

  let requestsArray = [];
  requests.relationships_follow_requests_sent.forEach((req) => {
    requestsArray.push(req.string_list_data[0].value);
  });

  return requestsArray;
}

module.exports = { checkFollowingRequests };
