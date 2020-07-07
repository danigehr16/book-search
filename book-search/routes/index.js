const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// Api Routes
router.use("/api");

// no api routes are hit send the react app

router.use(function(req, res){
    res.sendFile(path.join(_dirname, "../client/build/index.html"));
});



module.exports = router;