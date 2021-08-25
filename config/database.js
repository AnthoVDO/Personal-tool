import { Mongoose } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const conn = process.env.DB_GENERAL_URI;

const connection = mongoose.createConnection(conn, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const UserSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String
});

const User = connection.model("User", UserSchema);

module.exports = connection;