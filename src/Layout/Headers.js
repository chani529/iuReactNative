import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {Header, Icon} from 'react-native-elements';

const Headers = () => {
  return (
    <view style={styles.container}>
      <Header
        backgroundColor="#5f9ea0"
        placement="left"
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{text: 'Home', style: {color: '#fff'}}}></Header>
    </view>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Headers;
