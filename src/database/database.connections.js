import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const monogClient = new MongoClient(process.env.DATABASE_URL);
try {
    await monogClient.connect();
    console.log("MongoDB conectado!");
} catch (err) {
    console.log(err.message);
}

export const db = monogClient.db();