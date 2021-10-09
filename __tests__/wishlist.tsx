import * as WI from '../src/constants/wishlistInfo';

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);


import loadWishlist from '../src/steps/loadWishlist';
import addWishlist from '../src/steps/addWishlist';
import removeWishlist from '../src/steps/removeWishlist';

beforeAll(() => {
});

afterAll(() => {
  jest.clearAllMocks();
});

const breed1 = {
  id: '1111',
  name: 'AAAA',
  url: 'bbbbbb',
};

const breed2 = {
  id: '2222',
  name: 'AAAA',
  url: 'bbbbbb',
};

const breed3 = {
  id: '3333',
  name: 'AAAA',
  url: 'bbbbbb',
};

const myWishlist = [
  breed1,
  breed2,
  breed3,
];

// 01
describe('test load wishlist', () => {
  beforeAll(() => {
    mockAsyncStorage.getItem.mockImplementation((key) => {
      if(key == undefined){
        return null;
      }

      switch (key) {
        case WI.BREED:
          return JSON.stringify(myWishlist);
        default:
          break;
      }
      return null;
    });
  });

  afterEach(() => {
    mockAsyncStorage.getItem.mockClear();
  });

  test('load wishlist with correct Key', () => {
    return loadWishlist().then(data => {
      expect(mockAsyncStorage.getItem).toHaveBeenCalledWith(WI.BREED);
      expect(data).toEqual(myWishlist);
    });
  });

  test('load diary with correct duck 2 info', () => {
    return loadWishlist().then(data => {
      expect(mockAsyncStorage.getItem).toHaveBeenCalledWith(WI.BREED);
      expect(data[1]).toEqual(breed2);
    });
  });
  //
});
// end 01

// 02
describe('test add wishlist', () => {
  let verifyInfo = [];
  beforeAll(() => {
    mockAsyncStorage.getItem.mockImplementation((key) => {
      if(key == undefined){
        return null;
      }

      switch (key) {
        case WI.BREED:
          return JSON.stringify(myWishlist);
        default:
          break;
      }
      return null;
    });

    mockAsyncStorage.setItem.mockImplementation((key, data) => {
      //console.log('data ' + data);
      if(key == undefined){
        return false;
      }

      switch (key) {
        case WI.BREED:
          break;
        default:
          return false;
      }

      verifyInfo = JSON.parse(data);

      return true;
    });
    //
  });

  afterEach(() => {
    mockAsyncStorage.getItem.mockClear();
    mockAsyncStorage.setItem.mockClear();
  });

  test('add new breed 3', () => {
    const newBreed = {
      id: '3333',
      name: 'AAAA',
      url: 'bbbbbb',
    };

    const myNewWishlist = [...myWishlist, newBreed];

    return addWishlist(newBreed).then(data => {
      expect(mockAsyncStorage.setItem).toHaveBeenCalled();
      expect(data).toBeTruthy();
      expect(myNewWishlist).toEqual(verifyInfo); 
      expect(myNewWishlist[0]).toEqual(verifyInfo[0]);
      expect(myNewWishlist[1]).toEqual(verifyInfo[1]);
      expect(myNewWishlist[2]).toEqual(verifyInfo[2]);
      expect(myNewWishlist[3]).toEqual(verifyInfo[3]);
    });
    //
  });
  //
});
// end 02
