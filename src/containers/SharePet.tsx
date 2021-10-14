import React, { useState } from 'react';
import {
  SafeAreaView, TextInput, StyleSheet,
  View, Dimensions, TouchableOpacity,
  Text, ImageBackground,
} from 'react-native';

const WindowWidth = Dimensions.get('window').width;
import { THEMACOLOR } from '../constants';

import { shareADuck } from '../actions/uploadAction';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
//import { IStoreState, IUploadStore } from '../types/IStore';


export const SharePet = () => {
  const [ duckNote, setDuckNote ] = useState('');

  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //const uploadStore: IUploadStore = useSelector((state: IStoreState) => state.shareDuck);

  const onChangeText = (func: React.Dispatch<React.SetStateAction<string>>) => (
    text: string,
  ) => {
    func(text);
  };

  const shareDuck = (uri: string, msg: string) => {
    dispatch(shareADuck(uri, msg));
    navigation.goBack();
  };


  return(
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: THEMACOLOR }}>
        <DuckImage uri={route.params.uri} />
        <View style={duckStyle.container4} >
          <TextInput style={duckStyle.text}
                    placeholder='>>> Whats about this lovely one ?                                  '
                    value = {duckNote}
                    multiline={true}
                    onChangeText = {onChangeText(setDuckNote)}
          />
        </View>
        <View style={{flex: 0, flexDirection: 'row', alignItems: 'stretch',}}>
        <Text style={duckStyle.text_bnt} onPress={() => navigation.goBack()} > Cancel </Text>
        <Text>{'                  '} </Text>
        <Text style={duckStyle.text_bnt} onPress={() => {shareDuck(route.params.uri, duckNote)}} > Share </Text>
        </View>
      </SafeAreaView>
  );

};

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
