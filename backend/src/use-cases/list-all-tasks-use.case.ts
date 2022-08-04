import {PrismaTasksRepository} from '../repository/prisma/prisma-tasks-repository'

export class ListAllTasksUseCase{
  
  constructor(
    private prismaTasksRepository: PrismaTasksRepository
  ){}
  
  async execute(profileId:string){
    if(!profileId){
      throw new Error('O  profileId não foi fornecido ')
    }
    const tasks = await this.prismaTasksRepository.listAllTasks(profileId)


    return tasks

  }
}