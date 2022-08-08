export declare global{
  namespace ReactNavigation {
    interface RootParamList{
      home:undefined;
      register: undefined;
      login:undefined;
      tasks:{
        profile:{
          profileId:string;
          github:string;
          name:string;
        }
      };
    }
  }
}
