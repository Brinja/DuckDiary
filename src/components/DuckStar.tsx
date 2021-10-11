import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground,
        SafeAreaView, Dimensions, Platform } from 'react-native';

const WindowWidth = Dimensions.get('window').width;

const DuckStar = ({navigation, info, addWishList }) => {
  const {id, name, uri, url, date_time } = info ;
  //console.log('AAAa = ' + url);

  if(url === undefined || url == ''){
    return(
      <View style={duckStyle.container}>
      <TouchableOpacity onPress={() => { } } >
        <View style={duckStyle.container2} >
          <ImageBackground style={duckStyle.image}
            source={require('../assets/duck_footsteps.jpeg')} >
            <View style={{position: 'absolute', top: 120, left: 110, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
              <Text style={duckStyle.text2} >Ducks ! Ducks !</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
      </View>
    );
  }

  return(
    <View style={duckStyle.container}>
    <TouchableOpacity onPress={() => { } } >
      <View style={duckStyle.container2} >
        <ImageBackground style={duckStyle.image}
          source={{uri: url,}} >
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
            <Text>{name} {' - '} {date_time} </Text>
          </View>

          <View style={{position: 'absolute', top: 250, left: WindowWidth - 100, right: 0, bottom: 10, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
            <Text style={duckStyle.text1}
                  onPress={() => addWishList(name, url)}
            > +Wishlist </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
    </View>
  );
};

const duckStyle = StyleSheet.create(
  {
    container:
    {
      flex: 1,
      width: WindowWidth,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      backgroundColor: 'transparent',
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
    text1:{
      color: '#ebcb65',
      fontSize: 12,
      fontWeight: '500',
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
    text2:{
      color: '#785f26',
      fontSize: 20 ,
      fontWeight: '300',
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

export default DuckStar;
