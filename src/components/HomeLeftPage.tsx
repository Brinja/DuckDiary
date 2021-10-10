import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text, FlatList,
} from 'react-native';

import { THEMACOLOR } from '../constants';
import WishlistDuck from './WishlistDuck';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { localWishlistAction } from '../actions/localWishlistAction';
import localWishlist from '../reducers/localWishlist';

class HomeLeftPage extends Component {
  componentDidMount()
  {
    //console.log('Mount ->');
    const currentProps = this.props;
    currentProps.onFetchList();
  }

  componentDidUpdate(prevProps, prevState, snapshot)
  {
    //console.log('Update -> ');
  }

  componentWillUnmount()
  {
    //const currentProps = this.props;
    //currentProps.clearWishlist();
  }

  render() {
    const { navigation, onRemoveWishlist, images } = this.props;

    let DATA = [];
    if(images == undefined || !Array.isArray(images) || images.length == 0){
      const info = {
        id: 'NA',
        name: 'You have No Duck in Wishlist !',
        url: '',
      };

      const data_info = {
        id: '01',
        info: info,
        navigation: navigation,
      };

      DATA.push(data_info);
    }
    else {
      for(let i = 0 ; i < images.length ; i++){
        const info = {
          id: images[i].id,
          name: images[i].name,
          url: images[i].url,
          info_url: images[i].info_url,
        };

        const data_info = {
          id: '0' + i,
          info: info,
          navigation: navigation,
          func: onRemoveWishlist,
        };

        DATA.push(data_info);
      }
    }

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: THEMACOLOR, }}>
        <FlatList
          keyboardShouldPersistTaps='always'
          data={DATA}
          renderItem={(item) => renderItems(item)}
        />
      </SafeAreaView>
    );
  }
}

const renderItems = ({item}) =>
{
  if(item.id != 'FFFFF999FFF'){
    return (<WishlistDuck navigation={item.navigation} info={item.info} removeItem={item.func} />);
  }

  return (<View style={{flex: 1, alignItems:'center'}}>
          <Text> </Text>
          </View>);
};

function mapStateToProps(state){
  //console.log('mapStateToProps');
  const { images } = state.localWishlist;
  return {
    images,
  };
}

function mapDispatchToProps(dispatch)
{
  return{
      onFetchList: () => {dispatch(localWishlistAction.loadWishlist());},
      onClearList: () => {dispatch(localWishlistAction.clearWishlist());},
      onRemoveWishlist: (id, name) => {dispatch(localWishlistAction.removeWishist(id, name));},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeLeftPage);
