import {PrismaTasksRepository} from '../repository/prisma/prisma-tasks-repository'

interface RequestTasks{
  title:string;
  isChecking:boolean;
  profileId:string
}

export class CreateTasksUseCase{

  constructor(
    private prismaCreateTasksRepository: PrismaTasksRepository
  ){}

  async execute({isChecking,title , profileId}:RequestTasks){
    
    if(!profileId){
      throw new Error('O  profileId não foi fornecido ')
    }

    if(!title){
      throw new Error('O  título não foi fornecido ')
    }

    this.prismaCreateTasksRepository.create({
      title,
      isChecking,
      profileId
    })
  }
}