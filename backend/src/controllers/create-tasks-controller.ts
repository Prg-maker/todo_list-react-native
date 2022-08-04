import { Response } from "express"

import {CreateTasksUseCase} from '../use-cases/create-tasks-use-case'
import {PrismaTasksRepository} from '../repository/prisma/prisma-tasks-repository'

interface IRequest{
  body:{
    title:string;
    isChecking:boolean;
    profileId:string
  }
}

export class CreateTasksController{
  async handle(request:IRequest , response:Response){
    const {isChecking, profileId, title} = request.body


    const prismaTasksRepository = new PrismaTasksRepository()
    const createTasksUseCase = new CreateTasksUseCase(prismaTasksRepository)


    try{

      await createTasksUseCase.execute({
        title,
        isChecking,
        profileId
      })
      return response.status(201).json({
        message:"success"
      })
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