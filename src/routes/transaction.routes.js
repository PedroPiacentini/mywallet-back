import { Router } from "express";
import { authValidation } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { transactionSchema } from "../schemas/transaction.schema.js";
import { getTransactions, postTransaction } from "../controllers/transactions.controller.js";

const transactionRoutes = Router()

transactionRoutes.use(authValidation);

transactionRoutes.post("/transactions", validateSchema(transactionSchema), postTransaction);
transactionRoutes.get("/transactions", getTransactions);

export default transactionRoutes;