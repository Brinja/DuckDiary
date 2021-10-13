//#
export interface IModelNotes {
  date_time: string,
  text: string,
  uri: string,
  url: string,
}

export interface IModelDiary {
  duck_id:string,
  notes: IModelNotes[],
}

export interface IModelPetDiary {

}

export interface IModelSocialNotes {
  name: string,
  message: string,
}
export interface IModelPetProfile {
  id: string,
  breed: string,
  name: string,
  date_birth: string,
  about: string,
  owner_id: string,
  star: string,
  profile_uri: string,
  profile_url: string,
  social: IModelSocialNotes[],
}

export interface IModelBreed {
  id: string,
  name: string,
  url: string,
}

export interface IModelExplorePet {
  url : string,
  name : string,
  date_time: string,
}
