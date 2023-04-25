import { db } from "../database/database.connections.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export async function signUp(req, res) {
    const { userName, email, password } = req.body;

    try {
        const user = await db.collection("users").findOne({ email });
        if (user) return res.status(409).send("E-mail já cadastrado");

        const hash = bcrypt.hashSync(password, 10);

        await db.collection("users").insertOne({ userName, email, password: hash });
        res.status(201).send(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body;

    try {
        const user = await db.collection("users").findOne({ email });
        if (!user) return res.status(401).send("E-mail não cadastrado.");

        const passwordIsCorrect = bcrypt.compareSync(password, user.password);
        if (!passwordIsCorrect) return res.status(401).send("Senha incorreta");

        const token = uuid();
        await db.collection("sections").insertOne({ token, userId: user._id });
        res.send({ userName: user.userName, token });
    } catch (err) {
        res.status(500).send(err.message);
    }
}