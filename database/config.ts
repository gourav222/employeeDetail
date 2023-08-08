import mongoose from "mongoose";
import { config } from "dotenv";
config({ path: "./config/.env" });
const dataBaseUri: string = process.env.DATABASE_URL as string;

const databaseConnectoin = async () => {
  try {
    const { connection } = await mongoose.connect(dataBaseUri);
    console.log("Sucessfully connected", connection.host);
  } catch (error) {
    console.log("Not connected", error);
  }
};
export default databaseConnectoin;
