import * as UP from '../src/constants/userProfile';

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);


import loadProfile from '../src/steps/loadProfile';
import updateProfile from '../src/steps/updateProfile'

beforeAll(() => {
});

afterAll(() => {
  jest.clearAllMocks();
});

const userProfile = {
  id: '12345',
  create_time: '20211002020202',
  name: 'AAA',
  about: 'Hi there',
  total_duck: '100',
  total_star: '8921',
  total_bread: '23',
  language: 'MAY'
};


// 01
describe('test load user profile', () => {
  beforeAll(() => {
    mockAsyncStorage.getItem.mockImplementation((key) => {
      if(key == undefined){
        return null;
      }

      switch (key) {
        case UP.USER_PROFILE:
          return JSON.stringify(userProfile);
        default:
          break;
      }
      return null;
    });
  });

  afterEach(() => {
    mockAsyncStorage.getItem.mockClear();
  });

  test('load proifle with correct Key', () => {
    return loadProfile().then(data => {
      expect(mockAsyncStorage.getItem).toHaveBeenCalledWith(UP.USER_PROFILE);
      expect(data).toEqual(userProfile);
    });
  });

  test('load proifle with correct Name', () => {
    const testProfile = {
      id: '12345',
      create_time: '20211002020202',
      name: 'BBB',
      about: 'Hi there',
      total_duck: '100',
      total_star: '8921',
      total_bread: '23',
      language: 'MAY'
    };

    return loadProfile().then(data => {
      expect(mockAsyncStorage.getItem).toHaveBeenCalledWith(UP.USER_PROFILE);
      expect(data).not.toEqual(testProfile);
    });
  });

});
// end 01

// 02
describe('test update profile ', () => {
  beforeAll(() => {
    mockAsyncStorage.setItem.mockImplementation((key, data) => {
      //console.log('data ' + data);
      return true;
    });

  });

  afterEach(() => {
    mockAsyncStorage.setItem.mockClear();
  });

  test('update profile , mergeItem not call', () => {
    const testProfile = {
      id: '12345',
      create_time: '20211002020202',
      name: 'BBB',
      about: 'Hi there',
      total_duck: '100',
      total_star: '8921',
      total_bread: '23',
      language: 'MAY'
    };

    return updateProfile(testProfile).then(data => {
      expect(mockAsyncStorage.mergeItem).not.toHaveBeenCalled();
    });
  })

  test('update profile  ok', () => {
    const testProfile = {
      id: '12345',
      create_time: '20211002020202',
      name: 'BBB',
      about: 'Hi there',
      total_duck: '100',
      total_star: '8921',
      total_bread: '23',
      language: 'MAY'
    };

    return updateProfile(testProfile).then(data => {
      expect(mockAsyncStorage.setItem).toHaveBeenCalled();
      expect(data).toBeTruthy();
    });
  })
  //
});
// end 02
