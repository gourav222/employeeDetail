import app from "./app";
import { config } from "dotenv";
import databaseConnectoin from "./database/config";

config({path: "./config/.env"});

databaseConnectoin();

app.listen(process.env.PORT, () => {
    console.log("Listening on port " + process.env.PORT);
})