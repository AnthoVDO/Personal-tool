import passport from "passport";
import LocalStrategy from "passport-local";
import connection from "./database";

LocalStrategy = LocalStrategy.Strategy;
const User = connection.models.User;

const strategy = new LocalStrategy((username, password, cb) => {

    User.findOne({ username: usernamer }, (err, user) => {
        if (err) { return cb(err) }
        if (!user) {
            return cb(null, false, {
                message: "Incorrect username."
            })
        }
        if (!user.validPassword(password)) {
            return cb(null, false, { message: "Incorrect password." });
        } else {
            return cb(null, user);
        }
    })

});


passport.use(

);