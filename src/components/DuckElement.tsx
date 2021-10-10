import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground,
        SafeAreaView, Dimensions } from 'react-native';

const DuckElement = ({navigation, duckInfo}) => {
  return(
    <View style={duckStyle.container} >
      <ImageContent navigation={navigation} info={duckInfo} />
    </View>
  );
};

const ImageContent = ({navigation, info}) => {
  //const id = '12345';
  //const iUrl = 'https://raw.githubusercontent.com/zenika-open-source/the-duck-gallery/master/ducks/Amagash.png';
  //console.log('AAAAaA  = ' + JSON.stringify(info));
  const {id, name, uri, url, date_time } = info ;
  //console.log('AAAa = ' + url);

  return(
    <View>
    <TouchableOpacity onPress={() => navigation.navigate('Diary', {duck_id: id})} >
      <View style={duckStyle.container2} >
        <ImageBackground style={duckStyle.image}
          source={{uri: url,}} >
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
            <Text>{date_time}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
    </View>
  );
}

const duckStyle = StyleSheet.create(
  {
    container:
    {
      flex: 0,
      width: 150,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      backgroundColor: 'transparent',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 0,
      marginRight: 0,
    },
    container2:
    {
      flex: 0,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      width: 150,
      height: 150,
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
      backgroundColor: 'transparent' ,
      borderColor: '#868f9e',
      borderRadius: 0,
      borderWidth: 1,
    },
    text:{
      color: '#F01020',
      fontSize: 20 ,
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
  }
);

export default DuckElement;
