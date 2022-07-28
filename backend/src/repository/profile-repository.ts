export interface ProfileData{
  name:string;
  github?:string;
  password:string;
}

export interface ProfileRepository{
  create:(data:ProfileData)=> Promise<void>
}
