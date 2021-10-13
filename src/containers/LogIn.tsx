import React, {useState, useEffect} from 'react';
import {
  SafeAreaView, StyleSheet, TouchableOpacity,
  View, Dimensions, ImageBackground,
  Text, TextInput,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import { THEMACOLOR } from '../constants';
const WindowWidth = Dimensions.get('window').width;


import { IStoreState, ILoginStore } from '../types/IStore';
import { startLogIn, clearLogIn } from '../actions/loginAction';


export const LoginContainer = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loginStore:ILoginStore = useSelector((state: IStoreState) => state.manageLogin);
  //const { manageLogin } = useSelector((state: IStoreState) => state);
  //console.log('>>>>>> ' + JSON.stringify(loginStore));

  useEffect(() => {
    // dothing

    return () => {
      // dispatch clean url
      dispatch(clearLogIn());
    };
  }, []);

  const onChangeText = (func: React.Dispatch<React.SetStateAction<string>>) => (
    text: string,
  ) => {
    func(text);
  };


  if(loginStore.start_login == 'OK'){
    return(
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: THEMACOLOR }}>
          <Text> {'.............'} </Text>
      </SafeAreaView>
    );
  }
  else if (loginStore.url != ''){
    return(
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: THEMACOLOR }}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeTab')} >
          <View style={loginStyle.container2} >
            <ImageBackground style={loginStyle.image}
              source={{uri: loginStore.url}} >
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  else {
    return(
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: THEMACOLOR }} >
        <View style={loginStyle.container3} >
          <TextInput style={loginStyle.text}
                    placeholder=' USERNAME               '
                    value = {username}
                    multiline={false}
                    onChangeText = {onChangeText(setUsername)}
          />
        </View>
        <View style={loginStyle.container3} >
          <TextInput secureTextEntry={true} password={true} style={loginStyle.text}
                    placeholder=' PASSWORD              '
                    value = {password}
                    multiline={false}
                    onChangeText = {onChangeText(setPassword)}
          />
        </View>
        <View style={loginStyle.container4} >
          <Text style={loginStyle.text_bnt}
          onPress={() => {dispatch(startLogIn(username, password))}} > LogIn </Text>
        </View>
      </SafeAreaView>
    );
  }

};


const loginStyle = StyleSheet.create(
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
      justifyContent: 'center',
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
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#afb5a7',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      marginTop: 40,
      marginBottom: 10,
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
      borderWidth:  0,
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
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: '#afb5a7',
      borderColor: 'transparent',
      borderWidth:  0,
      borderRadius: 15,
    },
  }
);
