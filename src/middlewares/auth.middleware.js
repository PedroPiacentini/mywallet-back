import { db } from "../database/database.connections.js";

export async function authValidation(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    console.log(token)
    if (!token) return res.sendStatus(401);

    try {
        const section = await db.collection("sections").findOne({ token });
        if (!section) return res.sendStatus(401);

        res.locals.section = section;

        next();
    } catch (err) {
        res.status(500).send(err.message);
    }
}