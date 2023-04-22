import { Router } from "express";
import userRoutes from "./user.rotes.js";
import transactionRoutes from "./transaction.routes.js";

const router = Router();
router.use(userRoutes);
router.use(transactionRoutes);

export default router;