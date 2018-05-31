const express = require("express");
const pageConfig = require("./data/page");

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Authorization, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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
app.use("/", router);

const port = process.env.PORT || 8082;
app.listen(port, "0.0.0.0");
console.log("sever is listening on http://localhost:" + port);
