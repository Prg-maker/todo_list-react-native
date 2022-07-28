interface ProfileData{
  name:string;
  github:string;
  password:string;
}

interface ProfileRepository{
  create:(data:ProfileData)=> Promise<void>
}
