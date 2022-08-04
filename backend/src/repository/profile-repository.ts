export interface ProfileData{
  name:string;
  github?:string;
  password:string;
}

export interface ProfileId{
  Id:string,
  name:string;
  github?:string;
}

export interface ProfileRepository{
  create:(data:ProfileData)=> Promise<void>
  login:(data:ProfileData) => Promise<ProfileId | null>
}
