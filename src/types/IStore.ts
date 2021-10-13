import { IModelDiary, IModelPetDiary, IModelPetProfile,
        IModelBreed, IModelExplorePet } from './IModel';
//#
export interface IStoreState {
  login: ILoginStore,
  diary: IDiary,
  wishlist: IWishlistState,
  explore: IExploreState,
  pet_diary: IPetDiary,
}

export const initStore: IStoreState = {
  login: initLogInStore,
  diay: initDiaryState,
  wishlist: initWishlistState,
  explore: initExploreState,
  pet_diary: initPetState,
};

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
export interface IPetDiary {
  duck_diary: IModelPetDiary,
  duck_proifle: IModelPetProfile,
  msg: string,
}

export const initPetState: IPetDiary = {
  duck_diary: {},
  duck_profile: {},
  msg: '',
};
// End Pet Dairay

//# Diary // for home page
export interface IDiary {
  diary: IModelDiary[],
  duck_diary: IModelPetDiary[],
  duck_proifle: IModelPetProfile,
}

export const initDiaryState: IDiary = {
  diary: [],
  duck_diary: [],
  duck_proifle: {},
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
