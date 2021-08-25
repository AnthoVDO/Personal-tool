import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import passport from "passport";
import bcrypt from "bcryptjs";
import session from "express-session";
import MongoStore from "connect-mongo";
import dotenv from "dotenv";
import connection from "./config/database.js";

const app = express();
MongoStore = MongoStore(session);
const port = process.env.PORT || 8080;
dotenv.config();


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

/* Connection to mongo */

// const sessionStore = new MongoStore({
//     mongooseConnection: connection,
//     collection: "session"
// })

const sessionStore = MongoStore.create({
    mongoUrl: connection.conn
})

app.use(session({
    secret: process.env.SECRETSESSIONCODE,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 //Equal 1 day
    }
}));

/* Passport */





/* Routes */

app.use("/api/v1/personal-tool", users);



app.use("*", (req, res) => { //redirect to 404 any route that doesn't match the existing one
    res.status(404).json({ error: "not found" })
})

app.listen(port, () => {
    console.log("The server has started on port: " + port);
})

export default app;