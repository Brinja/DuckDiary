import React, { Component } from 'react';
import {
  SafeAreaView, StyleSheet,
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
    const { navigation, images, onAddWishlist, msg, onClearMsg } = this.props;

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
        { (msg != undefined && msg != '') &&
        <View style={{position: 'absolute', top: 230, left: 100, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
          <Text style={wishlistStyle.text_bnt}
                onPress={() => {onClearMsg()}}
            > {'>> '}{msg}{' <<'} </Text>
        </View>
        }
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


const wishlistStyle = StyleSheet.create(
  {
    text_bnt:{
      color: '#c29a44',
      fontSize: 28 ,
      fontWeight: '400',
      textDecorationLine: 'none',
      textAlign: 'left',
      alignSelf: 'flex-start',
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      borderRadius: 0,
      backgroundColor: '#afb5a7',
      borderColor: 'transparent',
      borderWidth:  0,
      borderRadius: 10,
    },
  }
);

function mapStateToProps(state){
  //console.log('mapStateToProps');
  const { images, msg } = state.exploreDuck;
  return {
    images,
    msg,
  };
}

function mapDispatchToProps(dispatch)
{
  return{
      onFetchList: () => {dispatch(fetchDuckListAction.fetchDuckList());},
      onClearList: () => {dispatch(fetchDuckListAction.clearDuckList());},
      onAddWishlist: (name, url) => {dispatch(fetchDuckListAction.addToWishList(name, url));},
      onClearMsg: () => {dispatch(fetchDuckListAction.clearMsg());},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeRightPage);
