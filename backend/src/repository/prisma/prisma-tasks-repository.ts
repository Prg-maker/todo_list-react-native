import { prisma } from '../../prisma'
import {AllTasksData, TasksData, TasksRepository} from '../tasks-repository'


export class PrismaTasksRepository implements TasksRepository{
  async create(data: TasksData){

    const {isChecking,title , profileId} = data

    await prisma.tasks.create({
      data:{
        title,
        isChecking,
        profileId,
      }
    })
  }

  async listAllTasks(ProfileId:string){

    const tasks  = await prisma.tasks.findMany({
      where:{
        profileId:ProfileId
      }
    }) 
   
    return tasks

  }

  async updateChecking(TaskId:string){
    
    await prisma.tasks.update({
      where:{
        id:TaskId
      },
      data:{
        isChecking:true
      }
    })

  }
}