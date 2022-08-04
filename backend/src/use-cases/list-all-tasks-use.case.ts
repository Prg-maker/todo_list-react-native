import {PrismaTasksRepository} from '../repository/prisma/prisma-tasks-repository'

class ListAllTasksUseCase{
  
  constructor(
    private prismaTasksRepository: PrismaTasksRepository
  ){}
  
  async execute(profileId:string){

    const tasks = await this.prismaTasksRepository.listAllTasks(profileId)


    return tasks

  }
}