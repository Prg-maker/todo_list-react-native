export interface TasksData{
  title:string;
  isChecking:boolean;
  profileId:string

}


export interface TasksRepository{
  create:(data:TasksData)=> Promise<void>
}