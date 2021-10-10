import { ACT_FETCH_DUCK_LIST, ACT_CLEAR_DUCK_LIST,
        ACT_ADD_DUCK_TO_WISHLIST } from '../constants';

function fetchDuckList()
{
  return {
    type: ACT_FETCH_DUCK_LIST,
    payload:{
      user_name: 'aaa',
    }
  }
}

function clearDuckList()
{
  return {
    type: ACT_CLEAR_DUCK_LIST,
    payload:{
      user_name: 'aaa',
    }
  }
}

function addToWishList(name, url)
{
  return {
    type: ACT_ADD_DUCK_TO_WISHLIST,
    payload:{
      name: name,
      url: url,
    }
  }
}

const fetchDuckListAction = {
  fetchDuckList,
  clearDuckList,
  addToWishList,
};

export { fetchDuckListAction };
