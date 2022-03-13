/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
// import AppHeader from './components/layout/Header.js';
// import Icon from 'react-native-vector-icons/AntDesign';
import {SafeAreaView, StyleSheet, Text, ImageBackground} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import {Header, Icon} from 'react-native-elements';
const App: () => Node = () => {
  return (
    <SafeAreaView>
      <Header
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
        rightComponent={{icon: 'home', color: '#fff'}}
      />
      <ImageBackground
        source={require('./assets/img/img_iu_1920.jpg')}
        style={styles.bgImage}></ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    width: '150%',
    height: '100%',
    // resizeMode: 'stretch',
    resizeMode: 'cover',
    // justifyContent: 'center',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#3143e8',
  },
});

export default App;
