import {prisma} from '../../prisma'
import {ProfileData , ProfileRepository} from '../profile-repository'

export class PrismaProfileRepository implements  ProfileRepository{
  async create({github , name ,password}:ProfileData){

    await prisma.profile.create({
      data:{
        name,
        github,
        password,
      }
    })

  }
}