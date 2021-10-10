import React, { Component } from 'react';
import {
  SafeAreaView, StyleSheet,
  View,
  Text, Dimensions, ImageBackground,
} from 'react-native';

const WindowWidth = Dimensions.get('window').width;

const DiaryComponent = ({navigation, info}) => {
  const { notes, date_time, uri, url, star } = info;
  return(
    <View style={diaryStyle.container} >
      <DateComponent date_time={date_time} />
      <PictureComponent uri={uri} url={url} star={star} />
      <NoteComponet notes={notes} />
    </View>
  );
};

const DateComponent = ({date_time}) => {
  const iDateTime = date_time == undefined ? 'on that day!' : date_time;
  return(
    <View>
      <Text style={diaryStyle.text_title} > {iDateTime} </Text>
    </View>
  );
};

const PictureComponent = ({uri, url, star})  => {
  const iURL = uri == undefined ? url : uri;
  const iStar = star == undefined ? '.' : star;

  return(
    <View style={diaryStyle.container2} >
      <ImageBackground style={diaryStyle.image}
        source={{uri: iURL,}} >
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
          <Text>{star}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const NoteComponet = ({notes}) => {
  if(notes == undefined){
    return(
      <View stype={diaryStyle.container3}>
        <Text>  </Text>
      </View>
    );
  }

  return(
    <View stype={diaryStyle.container3} >
      <Text style={diaryStyle.text} > {notes} </Text>
    </View>
  );
};

const diaryStyle = StyleSheet.create(
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
    },
    container3:
    {
      flex: 0,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      width: WindowWidth - 30,
      height: 80,
      backgroundColor: 'transparent',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    image: {
      flex: 1,
      resizeMode: 'contain',
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      backgroundColor: 'transparent',
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
      color: '#780445',
      fontSize: 28 ,
      fontWeight: '200',
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
  }
);

export default DiaryComponent;
