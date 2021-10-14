import React from 'react';
import { View, TouchableOpacity, Text,
        StyleSheet, Image, Dimensions } from 'react-native';

import { TranslatableText } from '../components/LanguageProvider';

const WindowWidth = Dimensions.get('window').width;

const HeaderComponent = ({navigation, info}) => {
  return(
    <View style={headerStyle.container}>
      <View style={{flex: 0, flexDirection: 'row', alignItems: 'stretch',}}>
        <AppLogo navigation={navigation} info={info} />
        <AppName />
      </View>
      <View style={{flex: 0, width: 130, height: 120, marginLeft: 15,}} >
      <Text style={{color: '#426c82', fontSize: 20 , fontWeight: '400',}}
            onPress={() => {navigation.navigate('AddDuck')}}
        >
         <TranslatableText dictionary={{
           swedish: '+ Lägg till Pet',
           english: '+ Add Pet',
           malay: '+ Tambah Haiwan Peliharaan'
         }}/>
        </Text>
      </View>
    </View>
  );
}
//<View style={headerStyle.container}>
//</View>
const AppLogo = ({navigation, info}) => {
  return(
    <View>
      <TouchableOpacity onPress={() => {navigation.navigate('Profile')}} >
        <Image style={headerStyle.image}
           source={require('../assets/duck.jpeg')}
        />
      </TouchableOpacity>
    </View>
  );
};

const AppName = ({info}) => {
  return(
    <View style={{flex: 0, width: 180, height: 100, marginRight: 15, }} >
      <Text style={headerStyle.text}>  Wahah !</Text>
    </View>
  );
};


const headerStyle = StyleSheet.create(
  {
    container:
    {
      flex: 0,
      flexDirection: 'row' ,
      width: WindowWidth,
      height: 100,
      justifyContent: 'space-between',
      alignItems: 'stretch',
      backgroundColor: 'transparent',
      //backgroundColor: '#9F29AA',
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
      height: 100,
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
      borderWidth:  0,
    },
  }
);

export default HeaderComponent;
