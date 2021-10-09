import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image
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
  const {id, name, uri, url } = info ;
  //console.log('AAAa = ' + url);

  return(
    <View>
    <TouchableOpacity onPress={() => navigation.navigate('Diary', {duck_id: id})} >
      <View style={duckStyle.container2} >
        <Image
          style={duckStyle.image}
          source={{uri: url,}}
          />
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
      width: 100,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      backgroundColor: 'transparent',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 20,
      marginRight: 20,
    },
    container2:
    {
      flex: 0,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      width: 150,
      height: 150,
      backgroundColor: '#868f9e',
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
      // backgroundColor: 'transparent' ,
      // borderColor: 'transparent',
      borderRadius: 0,
      borderWidth: 0,
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
