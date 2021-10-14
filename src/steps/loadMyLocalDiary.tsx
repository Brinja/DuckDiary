import { ACT_LOAD_DIARY } from '../constants';
import loadLocalDiary from './loadLocalDiary';

function loadMyLocalDiary(next, action)
{
  loadLocalDiary().then(data => {
    action.payload = {
      diary: data,
    };

    next(action);
    return;
  }).catch(e => {
    next(action);
    return;
  });
}


export default loadMyLocalDiary;
