import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  FlatList,
} from 'react-native';


import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import { THEMACOLOR } from '../constants';
import HeaderComponent from './HeaderComponent';
import DuckComponent from './DuckComponent';

import { manageDiaryAction } from '../actions/manageDiaryAction';
import manageDiary from '../reducers/manageDiary';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

//Component<Props>

class HomePage extends Component {
  componentDidMount()
  {
    //console.log('Mount ->');
    const currentProps = this.props;
    currentProps.onLoadDiary();
    currentProps.onClearLogIn();
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
    const { navigation, onLoadDiary, diary } = this.props;
    const info = {
      name : 'AAAA',
    };

    let DATA = [];
    if(diary == undefined || !Array.isArray(diary) || diary.length == 0) {
      //console.log('DIARY !!!!!!!');
    }
    else {
      for(let i = 0 ; i < diary.length; i++)
      {
        const { notes, duck_id } = diary[i];
        //console.log('!!!!! = ' + JSON.stringify(diary[i]));
        //console.log('!!!!! ??? = ' + duck_id);

        let contents = [];
        for(let j = 0; j < notes.length; j++){
            // add duck id into content
            const newContent = {
              ...notes[j],
              id: duck_id,
            };

            contents.push(newContent);
        }

        const data_info = {
          id: '00' + i,
          info: contents,
          navigation: navigation,
        };

        DATA.push(data_info);
      }
    }

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: THEMACOLOR }}>
        <HeaderComponent navigation={navigation} info={info} />
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
    return (<DuckComponent navigation={item.navigation} info={item.info} />);
  }

  return (<View style={{flex: 1, alignItems:'center'}}>
          <Text> </Text>
          </View>);
};

function mapStateToProps(state){
  //console.log('mapStateToProps');
  const { diary } = state.manageDiary;
  return {
    diary,
  };
}

function mapDispatchToProps(dispatch)
{
  return{
      onLoadDiary: () => {dispatch(manageDiaryAction.loadDiary());},
      onClearLogIn: () => {dispatch(manageDiaryAction.clearLogIn());},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
