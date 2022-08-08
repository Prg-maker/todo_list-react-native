import { UpdateTaskUseCase } from '../update-task-use-case'

const createSpy = jest.fn()
const listAllSpy = jest.fn()
const updateSpy = jest.fn()

const updateTasksRepository = new UpdateTaskUseCase({
  create:createSpy,
  listAllTasks:listAllSpy,
  updateChecking:updateSpy
}) 

describe('testing update taskRepo', () => { 
  it('should if task id does not provide, return error', async ()=> {
    await expect(updateTasksRepository.execute({
      taskId:''
    })).rejects.toThrow()
  }) 
  
  it('should verify error', async ()=> {
    await expect(updateTasksRepository.execute({
      taskId:'213'
    })).resolves.not.toThrow()
  })  
})