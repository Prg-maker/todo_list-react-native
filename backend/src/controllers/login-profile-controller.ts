import { Response , Request } from "express";
import { LoginProfileUseCase } from "../use-cases/login-profile-use-case";
import { PrismaProfileRepository } from "../repository/prisma/prisma-profile-repository";

type IRequest = {
  body: {
    name: string;
    password: string;
    github?: string;
  };
};


export class LoginProfileController {

 

  async handle(request: IRequest , response:Response ) {
    const { name, password, github } = request.body;

    const prismaProfileRepository = new PrismaProfileRepository();
    const loginProfileUseCase = new LoginProfileUseCase(
      prismaProfileRepository
    );

    try{

      const profile = await loginProfileUseCase.execute({
        name,
        password,
        github
      })

      return response.status(200).json(profile)

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
