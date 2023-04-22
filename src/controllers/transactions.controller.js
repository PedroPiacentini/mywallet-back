import { db } from "../database/database.connections.js";
import dayjs from "dayjs";

export async function postTransaction(req, res) {
    const section = res.locals.section;
    const transaction = {
        ...req.body,
        date: dayjs().format("DD/MM"),
        userId: section.userId
    };
    try {
        await db.collection("transactions").insertOne(transaction);
    } catch (err) {
        res.status(500).send(err.message);
    }
    res.status(201).send(201);
}

export async function getTransactions(req, res) {
    const section = res.locals.section;

    try {
        const transactions = await db.collection("transactions").find({ userId: section.userId }).toArray();
        res.send(transactions);
    } catch (err) {
        res.status(500).send(err.message);
    }
}