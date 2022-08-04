import {LoginProfileUseCase} from '../login-profile-use-case'

const createSpy = jest.fn()
const loginSpy = jest.fn()

const loginProfileUseCase = new LoginProfileUseCase({
  create:createSpy,
  login:loginSpy
})

describe('testing login profile use case', () => { 


  it('should verify if name and password is provided, else return error', async ()=> {
  
    await expect(loginProfileUseCase.execute({
      name:'daniel_test',
      password:'',
      github:''
    })).rejects.toThrow()

  })

  it('should verify if name and password is provided, else return error', async ()=> {
    
    await expect(loginProfileUseCase.execute({
      name:'',
      password:'12456',
      github:''
    })).rejects.toThrow()

  })

  it('should verify if name have at least 3', async ()=> {
    
    await expect(loginProfileUseCase.execute({
      name:'da',
      password:'12456',
      github:''
    })).rejects.toThrow()

  })

  it('should verify if password have at least 8', async ()=> {
    
    await expect(loginProfileUseCase.execute({
      name:'dasad',
      password:'12456',
      github:''
    })).rejects.toThrow()

  })

})