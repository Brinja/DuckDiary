import React from 'react';
import { View, TouchableOpacity, Text,
        StyleSheet, Image, Dimensions } from 'react-native';

const WindowWidth = Dimensions.get('window').width;

const HeaderComponent = ({navigation, info}) => {
  return(

    <View style={headerStyle.container}>
      <View style={{flex: 0, flexDirection: 'row', alignItems: 'center',}}>
        <AppLogo navigation={navigation} info={info} />
        <AppName />
      </View>
    </View>

  );
}
//<View style={headerStyle.container}>
//</View>
const AppLogo = ({navigation, info}) => {
  return(
    <View>
      <Image style={headerStyle.image}
         source={require('../assets/duck.jpeg')}
      />
    </View>
  );
};

const AppName = ({info}) => {
  return(
    <View>
      <Text style={headerStyle.text}>  Wahah !</Text>
    </View>
  );
};


const headerStyle = StyleSheet.create(
  {
    container:
    {
      flex: 0,
      flexDirection: 'column' ,
      width: WindowWidth,
      height: 120,
      justifyContent: 'space-between',
      alignItems: 'stretch',
      backgroundColor: 'transparent',
      marginTop: 10,
      marginBottom: 0,
      marginLeft: 10,
      marginRight: 10,
    },
    container2:
    {
      flex: 0,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      //width: ,
      height: 120,
    },
    image: {
      flex: 0,
      width: 60,
      height: 60,
      resizeMode: 'contain',
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      backgroundColor: 'transparent',
      borderRadius: 60,
      //borderColor: '#868f9e',
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

export default HeaderComponent;
