import {PrismaTasksRepository} from '../repository/prisma/prisma-tasks-repository'


interface UpdateTaskRequest{
  taskId:string
}

export class UpdateTaskUseCase{
  constructor(
    private prismaTasksRepository: PrismaTasksRepository
  ){}


  async execute(request:UpdateTaskRequest){
    if(!request.taskId){
      throw new Error('tasksId does not provided')
    }

    await this.prismaTasksRepository.updateChecking(request.taskId)
  }
}