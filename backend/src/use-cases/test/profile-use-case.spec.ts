import {CreateProfileUseCase} from '../create-profile-use-case'

const createSpy = jest.fn()

const createProfileUseCase = new CreateProfileUseCase({
  create:createSpy
})

describe('testing create profile use case' , ()=> {
  it('should verify if name and password is provided, else return error', async ()=> {
    await expect(createProfileUseCase.execute({
      name:'',
      password:''
    })).rejects.toThrow()
  })
})

/*




  await expect(createProfileUseCase.execute({
    name:'',
    password:''
  })).rejects...


  ver se o campo nome tem pelomenos  3 letras

  password 8


*/   