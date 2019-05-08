import express from "express";
const authRouter = express.Router();
import { signup, login } from "../controllers/authControllers";

//prettier-ignore
authRouter.route("/signup")
    .post(signup);
//prettier-ignore
authRouter.route("/login")
    .post(login);

module.exports = authRouter;
