const path=require('path');
const express = require("express");
const pageConfig = require("./data/page");
const app = express();

app.use((req, res, next) => {  // same as require('cors'); app.use( cors({ options:'*' })) ;
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Authorization, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    return res.end();
  }
  next();
});

app.use(express.static(path.join(__dirname,"./build")));
var router = express.Router();
router.get("/pageConfig", function(req, res) {
  setTimeout(() => {
    res.json(pageConfig);
  }, 500);
});
router.get("/appointments", function(req, res) {
  setTimeout(() => {
    res.json({
      appointments: ["appointment 1", "appointment 2 "],
      timeStamp: Date().toString()
    });
  }, 800);
});
router.get("/tasks", function(req, res) {
  setTimeout(() => {
    res.json({
      tasks: ["task1", "task2", "task3"],
      timeStamp: Date().toString()
    });
  }, 800);
});

// 1. historyapifallback is already built-in in express
// 2. there could be a collision of client route and server route; so it's better to prefix all server route with api;
app.use("/api", router);

const port = process.env.PORT || 8002;
app.listen(port, "0.0.0.0");
console.log("sever is listening on http://localhost:" + port);
