import { Request ,Response } from "express";
import { CreateProfileUseCase } from "../use-cases/create-profile-use-case";
import { PrismaProfileRepository } from "../repository/prisma/prisma-profile-repository";

type IRequest = {
  body: {
    name: string;
    password: string;
    github?: string;
  };
};

interface MessageError{
  message:string
}
export class ProfileController {

 

  async handle(request: IRequest , response:Response ) {
    const { name, password, github } = request.body;

    const prismaProfileRepository = new PrismaProfileRepository();
    const createProfileUseCase = new CreateProfileUseCase(
      prismaProfileRepository
    );

    try{
      await createProfileUseCase.execute({
        name,
        password,
        github,
      });
      return response.status(201).send({
        message:'created'
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
