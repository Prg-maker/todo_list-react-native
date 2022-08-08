import { Request, Response } from "express";

import {PrismaTasksRepository} from '../repository/prisma/prisma-tasks-repository'
import {UpdateTaskUseCase} from '../use-cases/update-task-use-case'

export class UpdateTaskController{
  async handle(request:Request ,response:Response){
    const {taskId} = request.body

    const prismaTasksRepository = new PrismaTasksRepository()
    const updateTasKUseCase = new UpdateTaskUseCase(prismaTasksRepository)

    try{

      await updateTasKUseCase.execute({
        taskId
      })

      return response.status(201).json({
        message:'success'
      })

      

    }catch(err){
      return response.status(401).json({
        message:'error'
      })
    }

  }
}