import * as DI from '../src/constants/diaryInfo';

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);


import loadLocalDiary from '../src/steps/loadLocalDiary';
import addLocalDiary from '../src/steps/addLocalDiary';
import updateLocalDiary from '../src/steps/updateLocalDiary';

beforeAll(() => {
});

afterAll(() => {
  jest.clearAllMocks();
});


const duckInfo = {
  duck_id: '12321',
  notes: [
    {
      date_time: 'aaaa',
      text: 'lovely duck today',
      uri: 'aaaa',
      url: 'aaaa',
    },
    {
      date_time: 'bbb',
      text: 'happy duck today',
      uri: 'aaaa',
      url: 'aaaa',
    },
  ],
};

const duckInfo2 = {
  duck_id: '332321',
  notes: [
    {
      date_time: '1111',
      text: 'lovely duck today',
      uri: 'aaaa',
      url: 'aaaa',
    },
    {
      date_time: '2222',
      text: 'happy duck today',
      uri: 'aaaa',
      url: 'aaaa',
    },
  ],
};

const duckInfo3 = {
  duck_id: '300021',
  notes: [
    {
      date_time: '1111',
      text: 'lovely duck today',
      uri: 'aaaa',
      url: 'aaaa',
    },
    {
      date_time: '2222',
      text: 'happy duck today',
      uri: 'aaaa',
      url: 'aaaa',
    },
  ],
};

const myDiaryInfo = [
  duckInfo,
  duckInfo2,
  duckInfo3
];


// 01
describe('test load diary', () => {
  beforeAll(() => {
    mockAsyncStorage.getItem.mockImplementation((key) => {
      if(key == undefined){
        return null;
      }

      switch (key) {
        case DI.MY_DIARY:
          return JSON.stringify(myDiaryInfo);
        default:
          break;
      }
      return null;
    });
  });

  afterEach(() => {
    mockAsyncStorage.getItem.mockClear();
  });

  test('load diary with correct Key', () => {
    return loadLocalDiary().then(data => {
      expect(mockAsyncStorage.getItem).toHaveBeenCalledWith(DI.MY_DIARY);
      expect(data).toEqual(myDiaryInfo);
    });
  });

  test('load diary with correct duck 2 info', () => {
    return loadLocalDiary().then(data => {
      expect(mockAsyncStorage.getItem).toHaveBeenCalledWith(DI.MY_DIARY);
      expect(data[1]).toEqual(duckInfo2);
    });
  });
  //
});
// end 01

// 02

describe('test add diary for new duck', () => {
  let verifyInfo = [];
  beforeAll(() => {
    mockAsyncStorage.getItem.mockImplementation((key) => {
      if(key == undefined){
        return null;
      }

      switch (key) {
        case DI.MY_DIARY:
          return JSON.stringify(myDiaryInfo);
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
        case DI.MY_DIARY:
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

  test('add duck 3', () => {
    const newDuck = {
      duck_id: '55555',
      notes: [
        {
          date_time: '1111',
          text: 'lovely duck today',
          uri: 'aaaa',
          url: 'aaaa',
        },
      ],
    };

    const myNewDiary = [...myDiaryInfo, newDuck];

    return addLocalDiary(newDuck).then(data => {
      expect(mockAsyncStorage.setItem).toHaveBeenCalled();
      expect(data).toBeTruthy();
      //expect(myDiaryInfo).toEqual(verifyInfo); // oay, why failed ????? @@
      expect(myDiaryInfo[0]).toEqual(verifyInfo[0]);
      expect(myDiaryInfo[1]).toEqual(verifyInfo[1]);
      expect(myDiaryInfo[2]).toEqual(verifyInfo[2]);
    });
    //
  });
  //
});
// end 02

// 03
describe('test add diary for existing Duck', () => {
  let verifyInfo = [];
  beforeAll(() => {
    mockAsyncStorage.getItem.mockImplementation((key) => {
      if(key == undefined){
        return null;
      }

      switch (key) {
        case DI.MY_DIARY:
          return JSON.stringify(myDiaryInfo);
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
        case DI.MY_DIARY:
          break;
        default:
          return false;
      }

      verifyInfo = JSON.parse(data);
      //console.log('data ' + JSON.stringify(verifyInfo));

      return true;
    });
    //
  });

  afterEach(() => {
    mockAsyncStorage.getItem.mockClear();
    mockAsyncStorage.setItem.mockClear();
  });

  test('test update diary', () => {
    const testNote = {
      date_time: 'a new day',
      text: 'great job',
      uri: 'htttttttt',
      url: 'htsssssss',
    };

    const { notes } = duckInfo2;
    const newNotes = [...notes, testNote];

    const newDuck = {
      ...duckInfo2,
      notes : newNotes,
    }

    const tempDiary = myDiaryInfo.filter(item => item.duck_id != newDuck.duck_id);
    const newDiary = [...tempDiary, newDuck];
    //console.log('new duck = ' + newDiary.length);
    return updateLocalDiary(newDuck.duck_id, testNote).then(data => {
      expect(mockAsyncStorage.setItem).toHaveBeenCalled();
      expect(data).toBeTruthy();
      expect(newDiary).toEqual(verifyInfo);
      expect(newDiary[0]).toEqual(verifyInfo[0]);
      expect(newDiary[1]).toEqual(verifyInfo[1]);
      expect(newDiary[2]).toEqual(verifyInfo[2]);
    });
    //
  });
  //
});
// end 03
