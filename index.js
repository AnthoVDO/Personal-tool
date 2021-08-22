// import app from "./server.js";
// import dotenv from "dotenv";
// import mongodb from "mongodb";
// import UsersDAO from "./model/userDAO.js";

// dotenv.config();

// const MongoClient = mongodb.MongoClient;

// const port = process.env.PORT || 8080;
// const dbUri = process.env.DB_GENERAL_URI;

// MongoClient.connect(dbUri).catch(
//     (err) => {
//         console.error("Fail to connect to the database in index.js file");
//         process.exit(1)
//     }
// ).then(async(client) => {
//     await UsersDAO.injectDB(client);
//     app.listen(port, () => {

//         console.log("Server running on port " + port);
//     })
// })