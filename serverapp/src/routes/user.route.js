import express from "express";
import {
  getUserById,
  createUser,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get(process.env.BASE_ROUTER + "user/:user_id", getUserById);
router.post(process.env.BASE_ROUTER + "user/create", createUser);
router.put(process.env.BASE_ROUTER + "user/update/:user_id", updateUser);

export default router;
