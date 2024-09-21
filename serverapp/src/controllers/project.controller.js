import Project from "../models/entities/projcet.entity.js";
import { handleErrorResponse } from "../middleware/response-handling/error-response/handle.error-response.js";
import { handleFailedResponse } from "../middleware/response-handling/failed-response/handle.failed-response.js";
import { handleSuccessResponse } from "../middleware/response-handling/success-response/handle.success-response.js";
import ProjectResponse from "../models/response/project.response.js";
import {
  getPagination,
  getPagingData,
} from "../middleware/pagination/pagination.handling.js";

async function findProjectById(id) {
  return await Project.findOne({
    where: {
      id: id,
    },
  });
}

async function getAllProject(req, res) {
  const { page, pageSize } = req.query;
  const { limit, offset } = getPagination(page, pageSize);
  try {
    const data = await Project.findAndCountAll({
      limit: limit,
      offset: offset,
    });

    const response = getPagingData(data, page, limit);
    
    return handleSuccessResponse(
      res,
      response,
      200,
      "Project successfully retrieved",
    );
  } catch (err) {
    return handleErrorResponse(res, err);
  }
}

async function getProjectById(req, res) {
  try {
    const data = await findProjectById(req.params.projectId);

    if (data == null) {
      return handleFailedResponse(res, "Project is not found", 404);
    }

    return handleSuccessResponse(
      res,
      data,
      200,
      "Project successfully retrieved",
    );
  } catch (err) {
    return handleErrorResponse(res, err);
  }
}

async function createProject(req, res) {
  const {
    company,
    project_name,
    project_progress,
    start_project,
    end_project,
  } = req.body;

  try {
    const data = await Project.create({
      company: company,
      project_name: project_name,
      project_progress: project_progress,
      start_project: start_project,
      end_project: end_project ? end_project : null,
    });
    return handleSuccessResponse(
      res,
      data,
      200,
      "Project created successfully",
    );
  } catch (err) {
    return handleErrorResponse(res, err);
  }
}

async function updateProject(req, res) {
  const id = req.params.projectId;
  const {
    company,
    project_name,
    project_progress,
    start_project,
    end_project,
  } = req.body;

  try {
    const project = await findProjectById(id);

    if (project == null) {
      return handleFailedResponse(res, "project is not found", 404);
    } else {
      const updatedProject = await Project.update(
        {
          company: company || project.company,
          project_name: project_name || project.project_name,
          project_progress: project_progress || project.project_progress,
          start_project: start_project || project.project_progress,
          end_project: end_project || project.end_project,
        },
        {
          where: {
            id: id,
          },
        },
      );
      const projectResponse = new ProjectResponse(
        id,
        updatedProject.company,
        updatedProject.project_name,
        updatedProject.project_progress,
        updatedProject.start_project,
      );

      return handleSuccessResponse(
        res,
        projectResponse,
        200,
        `Project with id ${id} successfully updated`,
      );
    }
  } catch (err) {
    return handleErrorResponse(res, err);
  }
}

async function deleteProject(req, res) {
  const id = req.params.projectId;
  try {
    const project = await findProjectById(id);
    if (project === null) {
      return handleFailedResponse(res, "Project is not found", 404);
    } else {
      await project.destroy();
      return handleSuccessResponse(
        res,
        project,
        200,
        `Project with id ${id} successfully deleted`,
      );
    }
  } catch (err) {
    return handleErrorResponse(res, err);
  }
}

export {
  getAllProject,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
