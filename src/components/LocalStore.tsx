import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text, Platform, TouchableOpacity,
} from 'react-native';
import { WebView } from 'react-native-webview';

import { THEMACOLOR } from '../constants';

class LocalStore extends Component {
  render(){
    const {
      navigation,
    } = this.props;

    if(this.props.route.params.uri == undefined || this.props.route.params.uri == ''){
      navigation.goBack();
    }

    const isIOS = Platform.OS === 'ios' ? true : false;

    return(
      <View style={{flex: 1}}>
        <WebView
          source={{uri: this.props.route.params.uri}}
        />
        { isIOS &&
          <View style={{position: 'absolute', top: 50, left: 10, right: 0, bottom: 0,
            justifyContent: 'flex-start', alignItems: 'flex-start'}}>
              <TouchableOpacity onPress={() => navigation.goBack()} >
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                }}>
                  <Text style={{color: '#0b29bf', fontSize: 20 , fontWeight: '700', }} > {'<'} </Text>
                  <Text style={{color: '#0b29bf', fontSize: 20 , fontWeight: '200', }} >Back </Text>
                </View>
              </TouchableOpacity>
          </View>
        }
      </View>
    );
  }
}

export default LocalStore;
