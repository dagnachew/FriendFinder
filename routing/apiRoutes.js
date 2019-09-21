// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

const friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // ---------------------------------------------------------------------------
  

app.get("/api/friends", (req, res) => {
    res.json(friendsData);
});

app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests.
    // It will do this by sending out the value "true" have a table.
    // req.body is available since we're using the body parsing middleware.
    if (friendsData.length < 5) {
      friendsData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

};