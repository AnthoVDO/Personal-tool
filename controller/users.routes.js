import express from "express";
import passport from "passport";
import validPassword from "../config/passwordUtils";
import genPassword from "../config/passwordUtils";
import connection from "../config/database";
import route from "color-convert/route";

const User = connection.models.User;
const router = express.Router;

/* Login */

router.route("/api/v1/user/login")
    .post((req, res, next) => {

    })
    .get((req, res, next) => {
        const form = '<h1>Login Page</h1><form method="POST" action="/login">\
    Enter Username:<br><input type="text" name="username">\
    <br>Enter Password:<br><input type="password" name="password">\
    <br><br><input type="submit" value="Submit"></form>';

        res.send(form);
    })

/* Register */

router.route("/api/v1/user/register")
    .post((req, res, next) => {

    })
    .get((req, res, next) => {
        const form = '<h1>Register Page</h1><form method="post" action="register">\
                    Enter Username:<br><input type="text" name="username">\
                    <br>Enter Password:<br><input type="password" name="password">\
                    <br><br><input type="submit" value="Submit"></form>';

        res.send(form);
    })

/*protected route */

router.route("/api/v1/user/protected-route")
    .get((req, res, next) => {
        if (req.isAuthenticated()) {
            req.send('<h1>You are authenticated</h1><p><a href="/logout">Logout and reload</a></p>')
        } else {
            res.send('<h1>You are not authenticated</h1><p><a href="/login">Login</a></p>');
        }
    })

/* log out */

router.route("/api/v1/user/logout").get((req, res, next) => {
    req.logout();
    res.redirect("/protected-route");
})

/* success */

router.route("/api/v1/user/login-success").get((req, res, next) => {
    res.send('<p>You successfully logged in. --> <a href="/protected-route">Go to protected route</a></p>')
})

/* Faillure */

router.route("/api/v1/user/login-faillure").get((req, res, next) => {
    res.send("You entered the wrong password.");
})

/* Root */

router.route("/api/v1/user")
    .get((req, res, next) => {
        res.send("<h1>Home</h1><p>Please <a href='/register'>register</a></p>")
    })

module.exports = router;