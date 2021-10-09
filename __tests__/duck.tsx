import * as DP from '../src/constants/duckProfile';

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);


import getDuck from '../src/steps/getDuck';
import updateDuck from '../src/steps/updateDuck';
import addDuck from '../src/steps/addDuck';

beforeAll(() => {
});

afterAll(() => {
  jest.clearAllMocks();
});

const duck1 = {
  id: '1111',
  breed: 'AAA',
  name: 'WAA',
  date_birth: '123213',
  about: 'Good duck',
  owner_id: '132321',
  star: '111',
  profile_uri: 'aaaa',
  profile_url: 'bbbbb',
  social: [
    {
      name: 'JJJ',
      message: 'Nice!',
    },
    {
      name: 'MMM',
      message: 'WOW WOW!',
    },
  ],
};

const duck2 = {
  id: '222',
  breed: 'AAA',
  name: '222',
  date_birth: '123213',
  about: 'Good duck',
  owner_id: '132321',
  star: '111',
  profile_uri: 'aaaa',
  profile_url: 'bbbbb',
  social: [
    {
      name: 'JJJ',
      message: 'Nice!',
    },
    {
      name: 'MMM',
      message: 'WOW WOW!',
    },
  ],
};

const duck3 = {
  id: '333',
  breed: 'AAA',
  name: '333',
  date_birth: '123213',
  about: 'Good duck',
  owner_id: '132321',
  star: '111',
  profile_uri: 'aaaa',
  profile_url: 'bbbbb',
  social: [
    {
      name: 'JJJ',
      message: 'Nice!',
    },
    {
      name: 'MMM',
      message: 'WOW WOW!',
    },
  ],
};

const myDuck = [
  duck1,
  duck2,
  duck3
];

// 01
describe('test get duck', () => {
  beforeAll(() => {
    mockAsyncStorage.getItem.mockImplementation((key) => {
      if(key == undefined){
        return null;
      }

      switch (key) {
        case DP.DUCK_PROFILE:
          return JSON.stringify(myDuck);
        default:
          break;
      }
      return null;
    });
  });

  afterEach(() => {
    mockAsyncStorage.getItem.mockClear();
  });

  test('get duck with correct Key', () => {
    return getDuck().then(data => {
      expect(mockAsyncStorage.getItem).toHaveBeenCalledWith(DP.DUCK_PROFILE);
      expect(data).toEqual(myDuck);
    });
  });
  //
});
// end 01

// 02
describe('test add duck', () => {
  let verifyInfo = [];
  beforeAll(() => {
    mockAsyncStorage.getItem.mockImplementation((key) => {
      if(key == undefined){
        return null;
      }

      switch (key) {
        case DP.DUCK_PROFILE:
          return JSON.stringify(myDuck);
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
        case DP.DUCK_PROFILE:
          break;
        default:
          return false;
      }

      verifyInfo = JSON.parse(data);
      //console.log('data ' + JSON.stringify(verifyInfo));

      return true;
      });
    });

    afterEach(() => {
      mockAsyncStorage.getItem.mockClear();
      mockAsyncStorage.setItem.mockClear();
    });

    test('add a new duck', () => {
      const newDuck = {
        id: '0011',
        breed: 'AAA',
        name: 'new Duck',
        date_birth: '123213',
        about: 'Good duck',
        owner_id: '132321',
        star: '111',
        profile_uri: 'aaaa',
        profile_url: 'bbbbb',
        social: [
          {
            name: 'JJJ',
            message: 'AAAAAA',
          },
          {
            name: 'MMM',
            message: 'AAAAAa',
          },
        ],
      };

      const myNewDuck = [...myDuck, newDuck];
      return addDuck(newDuck).then(data => {
        expect(mockAsyncStorage.setItem).toHaveBeenCalled();
        expect(data).toBeTruthy();
        expect(myNewDuck).toEqual(verifyInfo);
        expect(myNewDuck[0]).toEqual(verifyInfo[0]);
        expect(myNewDuck[1]).toEqual(verifyInfo[1]);
        expect(myNewDuck[2]).toEqual(verifyInfo[2]);
        expect(myNewDuck[4]).toEqual(verifyInfo[4]);
      });
      //
    });
  //
});
// end 02

// 03
describe('test update duck', () => {
  let verifyInfo = [];
  beforeAll(() => {
    mockAsyncStorage.getItem.mockImplementation((key) => {
      if(key == undefined){
        return null;
      }

      switch (key) {
        case DP.DUCK_PROFILE:
          return JSON.stringify(myDuck);
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
        case DP.DUCK_PROFILE:
          break;
        default:
          return false;
      }

      verifyInfo = JSON.parse(data);
      //console.log('data ' + JSON.stringify(verifyInfo));

      return true;
      });
    });

    afterEach(() => {
      mockAsyncStorage.getItem.mockClear();
      mockAsyncStorage.setItem.mockClear();
    });

    test('update a duck profile', () => {
      const duck2Update = {
        id: '222',
        breed: 'AAA',
        name: '222',
        date_birth: '123213',
        about: 'Good duck',
        owner_id: '132321',
        star: '111',
        profile_uri: 'yyyyyyyy',
        profile_url: 'kkkkkkkkkkkkkk',
        social: [
          {
            name: 'JJJ',
            message: 'Nice!',
          },
          {
            name: 'MMM',
            message: 'WOW WOW!',
          },
          {
            name: 'MMM',
            message: 'AH AH AH AH AH AH !',
          },
        ],
      };

      const tempMyDuck = myDuck.filter(item => item.id != duck2Update.id);
      const newMyDuck = [...tempMyDuck, duck2Update];

      return updateDuck(duck2Update).then(data => {
        expect(mockAsyncStorage.setItem).toHaveBeenCalled();
        expect(data).toBeTruthy();
        expect(newMyDuck).toEqual(verifyInfo);
        expect(newMyDuck[0]).toEqual(verifyInfo[0]);
        expect(newMyDuck[1]).toEqual(verifyInfo[1]);
        expect(newMyDuck[2]).toEqual(verifyInfo[2]);
      });
      //
    })
  //
});
// end 03
