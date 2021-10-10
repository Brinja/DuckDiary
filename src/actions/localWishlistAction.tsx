import { ACT_LOAD_WISHLIST, ACT_REMOVE_WISHLIST } from '../constants';

function loadWishlist()
{
  return {
    type: ACT_LOAD_WISHLIST,
    payload:{
      name: '',
    }
  }
}

function removeWishist(id, name)
{
  return {
    type: ACT_REMOVE_WISHLIST,
    payload:{
      name: name,
      id: id,
    }
  }
}

function clearWishlist()
{

}

const localWishlistAction =
{
  loadWishlist,
  removeWishist,
  clearWishlist,
};

export { localWishlistAction };
