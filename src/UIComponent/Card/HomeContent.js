import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';

const HomeContent = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/img/img_iu_1920.jpg')}
        style={styles.bgImage}></Image>
      <View style={styles.homeContentPanel}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1, margin: 10}}>
            <Image
              style={styles.contentImage}
              source={require('../../../assets/img/history.jpg')}></Image>
          </View>
          <View style={{flex: 1, margin: 10}}>
            <Image
              style={styles.contentImage}
              source={require('../../../assets/img/Lilac.jpg')}></Image>
          </View>
        </View>
        <View style={{flex: 1, margin: 10}}>
          <Image
            style={styles.contentImage}
            source={require('../../../assets/img/filmography.png')}></Image>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, margin: 10}}>
            <Image
              style={styles.contentImage}
              source={require('../../../assets/img/album.png')}></Image>
          </View>
          <View style={{flex: 1, margin: 10}}>
            <Image
              style={styles.contentImage}
              source={require('../../../assets/img/advertising.jpg')}></Image>
          </View>
        </View>
      </View>
    </View>
  );
};

let ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    height: ScreenHeight - 110,
    aspectRatio: 1,
  },
  homeContentPanel: {
    margin: 20,
    height: 600,
  },
  contentImage: {
    height: '100%',
    width: '100%',
  },
});
export default HomeContent;
