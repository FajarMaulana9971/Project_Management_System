import Project from "../models/entities/projcet.entity.js";
import {handleErrorResponse} from "../utils/response-handling/error-response/handle.error-response.js";
import {handleFailedResponse} from "../utils/response-handling/failed-response/handle.failed-response.js";
import {handleSuccessResponse} from "../utils/response-handling/success-response/handle.success-response.js";


async function getProjectById(req, res) {
    try{
        const data = await Project.findOne({
            where:{
                id: req.params.id,
            }
        })

        if(data == null){
            return handleFailedResponse(res, "Project is not found", 404)
        }

        return handleSuccessResponse(res, data, 200, "Project successfully retrieved")
    }catch (err){
        return handleErrorResponse(res, err)
    }
}

async function createProject(req, res) {
    const {company, project_name, project_progress, start_project} = req.body;

    try{
        const data = await Project.create({})
    }catch (err) {
        return handleErrorResponse(res, err)
    }
}


export  default getProjectById;