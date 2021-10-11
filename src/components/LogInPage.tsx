import React, { Component } from 'react';
import {
  SafeAreaView, StyleSheet, TouchableOpacity,
  View, Dimensions, ImageBackground,
  Text, TextInput,
} from 'react-native';

import { THEMACOLOR } from '../constants';
const WindowWidth = Dimensions.get('window').width;

import { loginAction } from '../actions/loginAction';
import manageLogin from '../actions/manageLogin';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class LogInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};
    this.state = {password: ''};

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  componentWillUnmount()
  {
    //const currentProps = this.props;
    //currentProps.onClearURL();
    console.log('LOGIN >>>> ');
  }

  updateUsername = (name) =>
  {
    this.setState({username: name});
  };

  updatePassword = (text) =>
  {
    this.setState({password: text});
  };

  render()
  {
    const { navigation, onStartLogin, url, onClearURL, start_login } = this.props;
    const { username, password } = this.state;

    //console.log('LOGIN = ' + url);

    if(url != undefined && url != ''){
      return(
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: THEMACOLOR }}>
            <DuckImage navigation={navigation} url={url} />
        </SafeAreaView>
      );
    }
    else if(start_login != undefined && start_login != ''){
      return(
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: THEMACOLOR }}>
          <Text> {'.............'} </Text>
      </SafeAreaView>
      );
    }
    else {
      return(
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: THEMACOLOR }} >
            <UsernameTag nameFunc={this.updateUsername} textName={username} />
            <PasswordTag passFunc={this.updatePassword} textPass={password} />
            <View style={loginStyle.container4} >
              <Text style={loginStyle.text_bnt}
              onPress={() => {onStartLogin(username, password)}} > LogIn </Text>
            </View>
        </SafeAreaView>
      );
    }
  }
}


const DuckImage = ({navigation, url}) => {
  return(
    <View>
    <TouchableOpacity onPress={() => navigation.navigate('HomeTab')} >
      <View style={loginStyle.container2} >
        <ImageBackground style={loginStyle.image}
          source={{uri: url}} >
        </ImageBackground>
      </View>
    </TouchableOpacity>
    </View>
  );
};

const UsernameTag = ({nameFunc, textName}) => {
  return(
    <View style={loginStyle.container3} >
      <TextInput style={loginStyle.text}
                placeholder=' USERNAME               '
                value = {textName}
                multiline={false}
                onChangeText = {(text) => nameFunc(text)}
      />
    </View>
  );
};

const PasswordTag = ({passFunc, textPass}) => {
  return(
    <View style={loginStyle.container3} >
      <TextInput secureTextEntry={true} password={true} style={loginStyle.text}
                placeholder=' PASSWORD              '
                value = {textPass}
                multiline={false}
                onChangeText = {(text) => passFunc(text)}
      />
    </View>
  );
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

function mapStateToProps(state){
  //console.log('mapStateToProps');
  const { start_login, url } = state.manageLogin;
  return {
    start_login,
    url,
  };
}

function mapDispatchToProps(dispatch)
{
  return{
      onStartLogin: (username, password) => {dispatch(loginAction.startLogIn(username, password));},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);
