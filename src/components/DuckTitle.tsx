import React from 'react';
import { View, TouchableOpacity, Text,
        StyleSheet, Image, Dimensions } from 'react-native';

const WindowWidth = Dimensions.get('window').width;

const DuckTitle = ({info}) => {
  const { name, profile_uri , date_birth } = info == undefined ? {} : info;
  //console.log('PROFILE URI = ' + profile_uri);
  const profile_url = '';
  
  return(
    <View style={headerStyle.container}>
      <View style={{flex: 0, flexDirection: 'row', alignItems: 'stretch',}}>
        <DuckLogo uri={profile_uri} url={profile_url} />
        <DuckName name={name} date_birth={date_birth} />
      </View>
    </View>
  );
}
// source={{uri: uri,}}

const DuckLogo = ({uri, url}) => {
  //const isURI = uri == '' ? false : true;

  return(
    <View>
        <Image style={headerStyle.image}
           source={{uri: uri}}
        />
    </View>
  );
};

const DuckName = ({name, date_birth}) => {
  const addedDate = date_birth == undefined ? 'on that day !' : date_birth;
  return(
    <View style={{flex: 0, width: 180, height: 100, marginRight: 15, flexDirection: 'column' ,}} >
      <Text style={headerStyle.text}> {name} </Text>
      <Text style={headerStyle.text2}> {'Added : '} {addedDate} </Text>
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
    text2:{
      color: '#F01020',
      fontSize: 10 ,
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

export default DuckTitle;
