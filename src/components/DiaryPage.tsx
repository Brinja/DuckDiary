import React, { Component } from 'react';
import {
  SafeAreaView, StyleSheet,
  View,
  Text, FlatList, Dimensions,
} from 'react-native';


import { THEMACOLOR } from '../constants';
import DuckProfile from './DuckProfile';
import DiaryComponent from './DiaryComponent';

import { manageDiaryAction } from '../actions/manageDiaryAction';
import { uploadAction } from '../actions/uploadAction';
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
    const { navigation, duck_diary, duck_profile, msg, onClearShareDuck } = this.props;

    //console.log('DIARY !!! = ' + this.props.route.params.duck_id);


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
        { (msg != undefined && msg != '') &&
        <View style={{position: 'absolute', top: 230, left: 100, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
          <Text style={diaryStyle.text_bnt}
                onPress={() => {onClearShareDuck()}}
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
    return (<DiaryComponent navigation={item.navigation} info={item.info} />);
  }

  return (<View style={{flex: 1, alignItems:'center'}}>
          <Text> </Text>
          </View>);
};

const diaryStyle = StyleSheet.create(
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
  const { duck_diary, duck_profile, msg } = state.manageDuckDiary;
  return {
    duck_diary,
    duck_profile,
    msg,
  };
}

function mapDispatchToProps(dispatch)
{
  return{
      onLoadDuckDiary: (id) => {dispatch(manageDiaryAction.loadDuckDiary(id));},
      onClearShareDuck: () => {dispatch(uploadAction.clearShareDuckMsg());},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DiaryPage);
