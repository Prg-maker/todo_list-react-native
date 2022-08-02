import { CreateTasksRepository } from '../create-tasks-use-case'

const createSpy = jest.fn()

const createTasksRepository = new CreateTasksRepository({
  create:createSpy
}) 

describe('testing create tasks use case', () => { 

  it('should verify title is provided' ,  async () => {
    await expect(createTasksRepository.execute({
      title:'',
      isChecking:false
    })).rejects.toThrow()
  })


  it('should verify create' ,  async () => {
    await expect(createTasksRepository.execute({
      title:'nova_tarefa',
      isChecking:false
    })).resolves.not.toThrow()
  })
})