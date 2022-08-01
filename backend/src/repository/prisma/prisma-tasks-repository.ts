import { prisma } from '../../prisma'
import {TasksData, TasksRepository} from '../tasks-respository'


class PrismaTasksRepository implements TasksRepository{
  async create(data: TasksData){

    const {isChecking,title} = data

    await prisma.tasks.create({
      data:{
        title,
        isChecking
      }
    })
  }
}