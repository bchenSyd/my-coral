const express = require('express');
const pageConfig = require('./data/page');

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, Content-Type, Accept")
    next()
});

var router = express.Router()
router.get('/pageConfig', function (req, res) {
    res.json(pageConfig);
})
app.use('/',router)

const port = process.env.PORT || 8080;
app.listen(port);
console.log('sever is listening on http://localhost:' + port);
