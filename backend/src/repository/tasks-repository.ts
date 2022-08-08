export interface TasksData{
  title:string;
  isChecking:boolean;
  profileId:string

}

export interface AllTasksData{
  id:string;
  title:string;
  isChecking:boolean;
}


export interface TasksRepository{
  create:(data:TasksData)=> Promise<void>
  listAllTasks: (ProfileId:string)=> Promise<AllTasksData[] | null>
  updateChecking: (TaskId:string)=> Promise<void>
}