const express = require('express');
const router = express.Router();

// user validation Middleware
const validUserRequestMiddleware = require("../app/middleware/validUserRequestMiddleware");

const user = require('../app/controllers/user');
const userAuth = require('../app/controllers/userAuth');
const article = require('../app/controllers/article');


router.get("/", (req, res) => {
    res.send("api")
});

router.post('/create/Admin', user.createAdmin) // create new Admin
router.post("/login", userAuth.login); // login validation
router.post('/create/Editor', validUserRequestMiddleware, user.createEditor) // create new account

router.post("/removeEditor", validUserRequestMiddleware, user.removeEditor); // remove editor
router.post("/changeStatus", validUserRequestMiddleware, user.changeStatus); // remove editor
router.get("/editors", validUserRequestMiddleware, user.getAllEditor); // find all editor

router.post("/createArticle", validUserRequestMiddleware, article.addNewArticle)
router.get("/articles", article.getAllArticle)

module.exports = router;