import { IModelDiary, IModelPetDiary, IModelPetProfile, IModelSocialNotes,
        IModelBreed, IModelExplorePet } from './IModel';

//# LogIn
export interface ILoginStore {
  start_login: string,
  url: string,
}

export const initLogInStore: ILoginStore = {
  start_login: '',
  url: '',
};

// End Login

//# Pet Diary

const initSocialNotes:IModelSocialNotes = {
  name: '',
  message:'',
};
const initDuckProfile: IModelPetProfile = {
  id: '',
  breed: '',
  name: '',
  date_birth: '',
  about: '',
  owner_id: '',
  star: '',
  profile_uri: '',
  profile_url: '',
  social: [initSocialNotes,],
};

export interface IPetDiary {
  duck_diary: IModelPetDiary,
  duck_profile: IModelPetProfile,
  msg: string,
}

export const initPetState: IPetDiary = {
  duck_diary: {},
  duck_profile: initDuckProfile,
  msg: '',
};
// End Pet Dairay

//# Diary // for home page
export interface IDiary {
  diary: IModelDiary[],
  duck_diary: IModelPetDiary[],
  duck_profile: IModelPetProfile,
}

export const initDiaryState: IDiary = {
  diary: [],
  duck_diary: [],
  duck_profile: initDuckProfile,
};
// End Diary


//# Image  for Wishlist
export interface IWishlistState {
  images: IModelBreed[],
}
export const initWishlistState: IWishlistState = {
  images: [],
};

// End Image for Wishlist

//# Image for Explore
export interface IExploreState {
  images: IModelExplorePet[],
  msg: string,
}

const initPet: IModelExplorePet = {
  url : '',
  name : 'Loading....',
  date_time: 'Loading..',
};

export const initExploreState: IExploreState = {
  images: [initPet,],
  msg: '',
};

// End Image for Explore

///// Not important
export interface IDuckStore {
  status: string,
}

export const initDuckState:IDuckStore = {
  status: '',
};

export interface IUploadStore {
  status: string,
}

export const initUploadState: IUploadStore = {
  status: '',
};

//#
export interface IStoreState {
  manageLogin: ILoginStore,
  manageDiary: IDiary,
  localWishlist: IWishlistState,
  exploreDuck: IExploreState,
  manageDuckDiary: IPetDiary,
  manageDuck: IDuckStore,
  shareDuck: IUploadStore,
}

export const initStore: IStoreState = {
  manageLogin: initLogInStore,
  manageDiary: initDiaryState,
  localWishlist: initWishlistState,
  exploreDuck: initExploreState,
  manageDuckDiary: initPetState,
  manageDuck: initDuckState,
  shareDuck: initUploadState,
};
