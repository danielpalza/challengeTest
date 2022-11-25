import express from "express";
import { AccountController } from "../controllers/accounts.controller.js";

const router = express.Router();

router.get("/get", AccountController.get);

export default router;
