import { ACT_LOAD_DIARY } from '../constants';
import updateLocalDiary from './updateLocalDiary';
import loadMyLocalDiary from './loadMyLocalDiary';

function addNewDiaryNote(next, action)
{
  const { duck_id, uri, note } = action.payload;

  if(duck_id == undefined){
    next(action);
    return;
  }

  const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
  const dateObj = new Date();
  const month = monthNames[dateObj.getMonth()];
  const day = String(dateObj.getDate()).padStart(2, '0');
  const year = dateObj.getFullYear();
  const date_time = day + ' ' + month  + ',' + year;

  const newNote = {
    date_time: date_time,
    text: note,
    uri: uri,
    url: '',
  };

  updateLocalDiary(duck_id, newNote).then(data => {
    action.payload = {
      duck_diary: data,
    }
    next(action);

    // load Home diary
    loadMyLocalDiary(next, {
      type: ACT_LOAD_DIARY,
      payload: {
        name: '',
      }
    });

    return;
  }).catch(e => {
    console.log('e = ' + e.message);
    next(action);
    return;
  });
}

export default addNewDiaryNote;
