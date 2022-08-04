import { Request, Response } from "express";
import {PrismaTasksRepository} from '../repository/prisma/prisma-tasks-repository'
import {ListAllTasksUseCase} from '../use-cases/list-all-tasks-use.case'

export class ListAllTasksController{
  async handle(request:Request , response:Response){
    const {profileId} = request.params
    
  const prismaTasksRepository = new PrismaTasksRepository()
    const listAllTasksController = new ListAllTasksUseCase(prismaTasksRepository)


    try{

      const tasks = await listAllTasksController.execute(profileId)

      return response.status(200).json(tasks)
    }catch(Error){
      const error = Error as {
        message:string
      }

      
      return response.status(402).send({
        message:error.message
      })
    }

  }
}