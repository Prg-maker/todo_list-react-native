interface TasksData{
  title:string;
  isChecking:boolean;
}


interface TasksRepository{
  create:(data:TasksData)=> Promise<void>
}