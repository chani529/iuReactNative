/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  View,
  ScrollView,
} from 'react-native';
// import {Icon} from 'react-native-elements';
import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Home from './src/Pages/Home.js';

import GradientHeader from 'react-native-gradient-header';

const App: () => Node = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide(); /** 추가 **/
    }, 2000); /** 스플래시 시간 조절 (2초) **/
  });
  return (
    //   <ScrollView
    // showsVerticalScrollIndicator={false}
    // showsHorizontalScrollIndicator={false}>

    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
};
let ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  tmp: {
    height: 1000,
  },
  headerContainer: {
    width: '100%',
    backgroundColor: '#3488C0',
    borderBottomWidth: 0,
    height: Platform.select({
      android: 56,
      default: 44,
    }),
  },
  headerStyle: {
    backgroundColor: '#3488C0',
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
    height: 120,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  linearGradient: {
    zIndex: 1,
    position: 'absolute',
    top: -150,
    left: -50,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    height: 300,
    width: 500,
    borderRadius: 730,
  },
  bgImage: {
    height: ScreenHeight,
    aspectRatio: 1, // Your aspect ratio
    // flex: 1,
  },
});

export default App;
