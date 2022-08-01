export interface TasksData{
  title:string;
  isChecking:boolean;
}


export interface TasksRepository{
  create:(data:TasksData)=> Promise<void>
}