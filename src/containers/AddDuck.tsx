import React, { useState, useEffect } from 'react';
import {
  SafeAreaView, TextInput, StyleSheet,
  View, Dimensions, TouchableOpacity,
  Text, ImageBackground,
  Button,
} from 'react-native';

import { PermissionsAndroid } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const WindowWidth = Dimensions.get('window').width;
import { THEMACOLOR } from '../constants';

import { addDuck } from '../actions/manageDuckAction';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { IStoreState,  } from '../types/IStore';

export const AddDuck = () => {
  const [ duckName, setDuckName ] = useState('');
  const [ duckNote, setDuckNote ] = useState('');
  const [ duckURI, setDuckURI ] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const duckStore = useSelector((state: IStoreState) => state.manageDuck);

  const onChangeText = (func: React.Dispatch<React.SetStateAction<string>>) => (
    text: string,
  ) => {
    func(text);
  };

  const pickImage = () =>
  {
    //console.log('pickImage');
    let options = {
      title: 'Select Image',
      noData: true,
      maxWidth: 5500,
      maxHeight: 5500,
    };
    // launchImageLibrary
    // launchCamera

    ImagePicker.launchImageLibrary(options, (info) => {
      //console.log('INFO = ' + JSON.stringify(info));
      if(info == undefined){
        return;
      }
      const { assets } = info;

      if(assets == undefined){
        return;
      }

      //console.log('INFO = ' + assets[0].uri);
      //this.updateURI(assets[0].uri);
      setDuckURI(assets[0].uri);
    });
  };

  const addNewDuck = (name: string, uri: string, note: string) => {
    dispatch(addDuck(name, uri, note));
    navigation.goBack();
  };


  return(
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: THEMACOLOR }}>
      <DuckImage funcPickImage={pickImage} uri={duckURI} />
      <View style={duckStyle.container3} >
        <TextInput style={duckStyle.text}
                  placeholder='>>> Give a name                                       '
                  value = {duckName}
                  multiline={true}
                  onChangeText = {onChangeText(setDuckName)}
        />
      </View>
      <View style={duckStyle.container4} >
        <TextInput style={duckStyle.text}
                  placeholder='>>> About this lovely one                                       '
                  value = {duckNote}
                  multiline={true}
                  onChangeText = {onChangeText(setDuckNote)}
        />
      </View>
      <View style={{flex: 0, flexDirection: 'row', alignItems: 'stretch',}}>
      <Text style={duckStyle.text_bnt} onPress={() => navigation.goBack()} > Cancel </Text>
      <Text>{'                  '} </Text>
      <Text style={duckStyle.text_bnt} onPress={() => {addNewDuck(duckName, duckURI, duckNote)}} > Save </Text>
      </View>
    </SafeAreaView>
  );

}

const DuckImage = ({funcPickImage, uri}) => {
  return(
    <View>
    { (uri === undefined || uri == '') &&
      <TouchableOpacity onPress={() => funcPickImage()} >
        <View style={duckStyle.container2} >
          <ImageBackground style={duckStyle.image}
            source={require('../assets/donald_duck.jpeg')} >
            <View style={{position: 'absolute', top: 120, left: 80, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
              <Text style={duckStyle.text_title} > {'>>'}Add Picture{'<<'} </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    }
    { (uri != undefined && uri != '' ) &&
    <TouchableOpacity onPress={() => {}} >
      <View style={duckStyle.container2} >
        <ImageBackground style={duckStyle.image}
          source={{uri: uri}} >
        </ImageBackground>
      </View>
    </TouchableOpacity>
    }
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
