import {PrismaProfileRepository} from '../repository/prisma/prisma-profile-repository'

interface RequestCreateProfile{
  name:string;
  password:string;
  github?:string;
}


export class CreateProfileUseCase{

  constructor(
    private prismaProfileRepository:PrismaProfileRepository
  ){}

  execute(request:RequestCreateProfile){
    const {name,password,github} = request

  }
}