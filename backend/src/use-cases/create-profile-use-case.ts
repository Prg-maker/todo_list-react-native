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

  async execute(request:RequestCreateProfile){
    const {name,password,github} = request


    if(!name || !password){

      throw new Error('O nome ou senha não foi fornecido')
      
    }

    
    if(name.length <= 2 ){
      throw new Error('O nome é muito pequeno')
    }

        
    if(password.length <= 7 ){
      throw new Error('O senha muito pequena')
    }

    await this.prismaProfileRepository.create({
      name,
      password,
      github
    })
  }
}