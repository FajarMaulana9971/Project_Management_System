import express from "express";
import {
  getAllProject,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/project.controller.js";

const router = express.Router();

router.get(process.env.BASE_ROUTER + "project", getAllProject);
router.get(process.env.BASE_ROUTER + "project/:projectId", getProjectById);
router.post(process.env.BASE_ROUTER + "project/create", createProject);
router.put(
  process.env.BASE_ROUTER + "project/update/:projectId",
  updateProject,
);
router.delete(
  process.env.BASE_ROUTER + "project/delete/:projectId",
  deleteProject,
);

export default router;
