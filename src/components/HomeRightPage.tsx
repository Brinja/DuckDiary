import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text, FlatList,
} from 'react-native';

import { THEMACOLOR } from '../constants';
import DuckStar from './DuckStar';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDuckListAction } from '../actions/fetchDuckListAction';
import exploreDuck from '../reducers/exploreDuck';

class HomeRightPage extends Component {

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
    //currentProps.onClearList();
  }

  render() {
    const { navigation, images, onAddWishlist } = this.props;

    const DATA = [];
    if(images == undefined || !Array.isArray(images) || images.length == 0){
      const info = {
        id: '000',
        name: 'Loading...',
        date_time: 'loading...',
        url: '',
      };

      const data_list = {
        id: '01',
        info: info,
        navigation: navigation,
      };

      DATA.push(data_list);
    }
    else {
      for(let i = 0; i < images.length ; i++){
        const info = {
          id: '000' + i,
          name: images[i].name,
          date_time: images[i].date_time,
          url: images[i].url,
        };

        const data_list = {
          id: '0' + i,
          info: info,
          navigation: navigation,
          func : onAddWishlist,
        };

        DATA.push(data_list);
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
    return (<DuckStar navigation={item.navigation} info={item.info} addWishList={item.func} />);
  }

  return (<View style={{flex: 1, alignItems:'center'}}>
          <Text> </Text>
          </View>);
};


function mapStateToProps(state){
  //console.log('mapStateToProps');
  const { images } = state.exploreDuck;
  return {
    images,
  };
}

function mapDispatchToProps(dispatch)
{
  return{
      onFetchList: () => {dispatch(fetchDuckListAction.fetchDuckList());},
      onClearList: () => {dispatch(fetchDuckListAction.clearDuckList());},
      onAddWishlist: (name, url) => {dispatch(fetchDuckListAction.addToWishList(name, url));},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeRightPage);
