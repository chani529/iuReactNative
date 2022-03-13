/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
import {Header, Icon} from 'react-native-elements';
import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App: () => Node = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      stickyHeaderIndices={[0]}>
      <SafeAreaView>
        {
          <Header
            style={styles.headerStyle}
            leftComponent={{icon: 'menu', color: '#fff'}}
            centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
            rightComponent={{icon: 'home', color: '#fff'}}
          />
        }
        {/* <View style={styles.tmp}></View> */}
        {/* <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>Sign in with Facebook</Text>
        </LinearGradient> */}
        {
          <Image
            source={require('./assets/img/img_iu_1920.jpg')}
            style={styles.bgImage}></Image>
        }
        {
          <Image
            source={require('./assets/img/img_iu_1920.jpg')}
            style={styles.bgImage}></Image>
        }
      </SafeAreaView>
    </ScrollView>
  );
};
let ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  tmp: {
    height: 1000,
  },
  headerStyle: {},
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
    height: ScreenHeight - 100,
    aspectRatio: 1, // Your aspect ratio
    // flex: 1,
  },
});

export default App;
