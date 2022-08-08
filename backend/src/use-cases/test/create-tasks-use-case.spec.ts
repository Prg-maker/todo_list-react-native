import { CreateTasksUseCase } from '../create-tasks-use-case'

const createSpy = jest.fn()
const listAllSpy = jest.fn()
const updateSpy = jest.fn()

const createTasksRepository = new CreateTasksUseCase({
  create:createSpy,
  listAllTasks:listAllSpy,
  updateChecking:updateSpy
}) 

describe('testing create tasks use case', () => { 

  it('should verify title is provided' ,  async () => {
    await expect(createTasksRepository.execute({
      title:'',
      isChecking:false,
      profileId:'id_fake'
    })).rejects.toThrow()
  })

  it('should verify profileId is provided' ,  async () => {
    await expect(createTasksRepository.execute({
      title:'',
      isChecking:false,
      profileId:''
    })).rejects.toThrow()
  })


  it('should verify create' ,  async () => {
    await expect(createTasksRepository.execute({
      title:'nova_tarefa',
      isChecking:false,
      profileId:'id_fake'
    })).resolves.not.toThrow()
  })
})