import passport from "passport";
import LocalStrategy from "passport-local";
import connection from "./database";

LocalStrategy = LocalStrategy.Strategy;
const User = connection.models.User;