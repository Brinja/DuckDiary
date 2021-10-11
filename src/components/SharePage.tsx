import React, { Component } from 'react';
import {
  SafeAreaView, TextInput, StyleSheet,
  View, Dimensions, TouchableOpacity,
  Text, ImageBackground,
  Button,
} from 'react-native';

const WindowWidth = Dimensions.get('window').width;
import { THEMACOLOR } from '../constants';

import { uploadAction } from '../actions/uploadAction';
import shareDuck from '../reducers/shareDuck';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class SharePage extends Component {
  constructor(props) {
    super(props);
    this.state = {duckNote: ''};
    this.shareDuck = this.shareDuck.bind(this);
  }

  componentDidMount()
  {
    const currentProps = this.props;
    currentProps.onClearShareDuck();
  }

  updateNote = (text) =>
  {
    //console.log('updateNote');
    this.setState({duckNote: text});
  };

  shareDuck = (uri, msg) =>
  {
    const currentProps = this.props;
    currentProps.onShareDuck(uri, msg);
    currentProps.navigation.goBack();
  }

  render() {
    const { navigation } = this.props;
    const { duckNote } = this.state;

    return(
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: THEMACOLOR }}>
        <DuckImage uri={this.props.route.params.uri} />
        <DuckNote noteFunc={this.updateNote} textNote={duckNote}/>
        <View style={{flex: 0, flexDirection: 'row', alignItems: 'stretch',}}>
        <Text style={duckStyle.text_bnt} onPress={() => navigation.goBack()} > Cancel </Text>
        <Text>{'                  '} </Text>
        <Text style={duckStyle.text_bnt} onPress={() => {this.shareDuck(this.props.route.params.uri, duckNote)}} > Share </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const DuckImage = ({uri}) => {
  return(
    <View>
    <TouchableOpacity onPress={() => {}} >
      <View style={duckStyle.container2} >
        <ImageBackground style={duckStyle.image}
          source={{uri: uri}} >
        </ImageBackground>
      </View>
    </TouchableOpacity>
    </View>
  );
};

const DuckNote = ({noteFunc, textNote}) => {
  return(
  <View style={duckStyle.container4} >
    <TextInput style={duckStyle.text}
              placeholder='>>> Whats about this lovely one ?                                  '
              value = {textNote}
              multiline={true}
              onChangeText = {(text) => noteFunc(text)}
    />
  </View>
  );
};

const duckStyle = StyleSheet.create(
  {
    container:
    {
      flex: 1,
      width: WindowWidth - 30,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      backgroundColor: '#ada679',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 15,
      marginRight: 15,
    },
    container2:
    {
      flex: 0,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      width: WindowWidth - 30,
      height: 280,
      backgroundColor: '#afb5a7',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      // marginLeft: 15,
      // marginRight: 15,
    },
    container3:
    {
      flex: 0,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      width: WindowWidth - 30,
      height: 50,
      backgroundColor: '#afb5a7',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
    },
    container4:
    {
      flex: 0,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      width: WindowWidth - 30,
      height: 120,
      backgroundColor: '#afb5a7',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      marginTop: 10,
      marginBottom: 40,
      marginLeft: 10,
      marginRight: 10,
    },
    image: {
      flex: 1,
      resizeMode: 'contain',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: 'transparent' ,
      //borderColor: '#868f9e',
      borderRadius: 0,
      borderWidth: 0,
    },
    text:{
      color: '#F01020',
      fontSize: 18 ,
      fontWeight: '100',
      textDecorationLine: 'none',
      textAlign: 'left',
      alignSelf: 'flex-start',
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      borderRadius: 0,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderWidth:  0 ,
    },
    text_title:{
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
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderWidth:  0,
    },
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
  const { status } = state.shareDuck;
  return {
    status,
  };
}

function mapDispatchToProps(dispatch)
{
  return{
      onShareDuck: (uri, notes) => {dispatch(uploadAction.shareADuck(uri, notes));},
      onClearShareDuck: () => {dispatch(uploadAction.clearShareDuckMsg());},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SharePage);
