import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text, FlatList, Dimensions,
} from 'react-native';


import { THEMACOLOR } from '../constants';
import DuckProfile from './DuckProfile';
import DiaryComponent from './DiaryComponent';

import { manageDiaryAction } from '../actions/manageDiaryAction';
import manageDuckDiary from '../reducers/manageDuckDiary';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DiaryPage extends Component {
  componentDidMount()
  {
    //console.log('Mount ->');
    const currentProps = this.props;
    currentProps.onLoadDuckDiary(currentProps.route.params.duck_id);
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
    const { navigation, duck_diary, duck_profile } = this.props;

    //console.log('DIARY ???  = ' + JSON.stringify(duck_diary));
    let DATA = [];
    if(duck_diary == undefined ) {
      //console.log('DIARY !!!!!!!');
    }
    else {
      const { notes } = duck_diary;
      if(notes == undefined)
      {

      }
      else {
        for(let i = 0; i < notes.length ; i++){
          const data_info = {
            id: '00' + i,
            info: notes[i],
            navigation: navigation,
          };

          DATA.push(data_info)
        }
      }

    }

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: THEMACOLOR }}>
        <DuckProfile navigation={navigation} info={duck_profile} />
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
    return (<DiaryComponent navigation={item.navigation} info={item.info} />);
  }

  return (<View style={{flex: 1, alignItems:'center'}}>
          <Text> </Text>
          </View>);
};

function mapStateToProps(state){
  //console.log('mapStateToProps');
  const { duck_diary, duck_profile } = state.manageDuckDiary;
  return {
    duck_diary,
    duck_profile,
  };
}

function mapDispatchToProps(dispatch)
{
  return{
      onLoadDuckDiary: (id) => {dispatch(manageDiaryAction.loadDuckDiary(id));},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DiaryPage);
