import express from "express";
import passport from "passport";
import passwordUtils from "../config/passwordUtils.js";


const router = express.Router;

router.route("/users").get();

module.exports = router;