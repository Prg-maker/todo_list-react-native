import {PrismaTasksRepository} from '../repository/prisma/prisma-tasks-repository'

interface RequestTasks{
  title:string;
  isChecking:boolean;
}

export class CreateTasksRepository{

  constructor(
    private prismaCreateTasksRepository: PrismaTasksRepository
  ){}

  async execute({isChecking,title}:RequestTasks){
    if(!title){
      throw new Error('O  título não foi fornecido ')
    }

    this.prismaCreateTasksRepository.create({
      title,
      isChecking
    })
  }
}