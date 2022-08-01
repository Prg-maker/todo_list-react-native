import {CreateProfileUseCase} from '../create-profile-use-case'

const createSpy = jest.fn()

const createProfileUseCase = new CreateProfileUseCase({
  create:createSpy
})

describe('testing create profile use case' , ()=> {

  it('should verify if name and password is provided, else return error', async ()=> {
    
    await expect(createProfileUseCase.execute({
      name:'daniel_test',
      password:'',
      github:''
    })).rejects.toThrow()

  })

  it('should verify if name and password is provided, else return error', async ()=> {
    
    await expect(createProfileUseCase.execute({
      name:'',
      password:'12456',
      github:''
    })).rejects.toThrow()

  })

  it('should verify if name have at least 3', async ()=> {
    
    await expect(createProfileUseCase.execute({
      name:'da',
      password:'12456',
      github:''
    })).rejects.toThrow()

  })

  it('should verify if password have at least 8', async ()=> {
    
    await expect(createProfileUseCase.execute({
      name:'dasad',
      password:'12456',
      github:''
    })).rejects.toThrow()

  })


  it('should verify create', async ()=> {
    
    await expect(createProfileUseCase.execute({
      name:'daniel',
      password:'123456789',
      github:''
    })).resolves.not.toThrow()

  })

  
})

