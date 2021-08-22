import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import passport from "passport";
import passportLocal from "passport-local";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";
import session from "express-session";

const app = express();
const passportLocalStrategy = passportLocal.Strategy();

const port = process.env.PORT || 8080;


app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000", //<--location to the react app
    credentials: true
}));

app.use(session({
    secret: process.env.SECRETSESSIONCODE,
    resave: true,
    saveUninitialized: true
}))

/* Routes */

app.use("/api/v1/personal-tool", users);



app.use("*", (req, res) => { //redirect to 404 any route that doesn't match the existing one
    res.status(404).json({ error: "not found" })
})

app.listen(port, () => {
    console.log("The server has started on port: " + port);
})

export default app;