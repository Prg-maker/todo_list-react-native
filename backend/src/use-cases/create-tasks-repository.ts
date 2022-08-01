interface RequestTasks{
  title:string;
  isChecking:boolean;
}

export class CreateTasksRepository{
  async execute({isChecking,title}:RequestTasks){

  }
}