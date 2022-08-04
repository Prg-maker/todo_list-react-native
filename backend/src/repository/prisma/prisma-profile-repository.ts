import {prisma} from '../../prisma'
import {ProfileData , ProfileRepository , ProfileId} from '../profile-repository'

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


  async login({name,password,github}:ProfileData){

    const Profile  = await prisma.profile.findFirst({
      where:{
        name,
        password,
        github
      }
    }) as ProfileId | null


    return Profile


  }
}