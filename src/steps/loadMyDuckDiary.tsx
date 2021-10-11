import React from 'react';
import getDuck from './getDuck';
import loadLocalDiary from './loadLocalDiary';

function loadMyDuckDiary(next, action)
{
  const { duck_id } = action.payload;
  if(duck_id == undefined || duck_id == '')
  {
    next(action);
    return;
  }

  //console.log('Load DUCK = ' + duck_id);
  loadLocalDiary().then(diary => {
    //console.log('Load  Diary = ' + JSON.stringify(diary));
    //if(diary != undefined){
      const tempDiary = diary.filter(item => item.duck_id == duck_id);
      const duckDiary = tempDiary[0];
      //console.log('Load DUCK Diary = ' + JSON.stringify(duckDiary));

      getDuck().then(duck => {
        const tempDuck = duck.filter(item => item.id == duck_id);
        const duckProfile = tempDuck[0];
        //console.log('Load DUCK Profile = ' + JSON.stringify(duckProfile));
          action.payload = {
            duck_diary: duckDiary,
            duck_profile: duckProfile,
          }
          next(action);
          return;
      }).catch(e => {
        console.log('e = ' + e.message);
        next(action);
        return;
      });
    //}
  }).catch(e => {
    console.log('e = ' + e.message);
    next(action);
    return;
  });


}

export default loadMyDuckDiary;
