import { Router } from "express";
import { signUp, signIn } from "../controllers/users.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { userSchema } from "../schemas/user.schema.js";

const userRoutes = Router();

userRoutes.post("/sign-up", validateSchema(userSchema), signUp);
userRoutes.post("/sign-in", signIn);

export default userRoutes;