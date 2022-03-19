import React, {createRef, Component} from 'react';
import {Animated, Text, StyleSheet, Image, Dimensions} from 'react-native';
// import ListItem from '../Components/ListItem';
import CollapsibleHeader from '../Layout/CollapsibleHeader';
import TabBar from '../Layout/TabBar';
import HomeContent from '../UIComponent/Card/HomeContent';

class Home extends Component {
  scrollY = new Animated.Value(0);
  header = createRef(null);

  state = {
    headerHeight: 0,
    stickyHeaderHeight: 0,
    data: [{id: 1}],
  };

  componentDidMount() {}

  onHeaderLayout = headerHeight => {
    this.setState({
      headerHeight,
    });
  };

  onStickyHeaderLayout = stickyHeaderHeight => {
    this.setState({
      stickyHeaderHeight,
    });
    this.header?.current?.setStickyHeight(stickyHeaderHeight);
  };

  render() {
    const {stickyHeaderHeight, data} = this.state;
    return (
      <>
        <Animated.FlatList
          contentContainerStyle={{paddingTop: this.state.headerHeight}}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.scrollY}}}],
            {useNativeDriver: true},
          )}
          data={data}
          renderItem={({item}) => {
            return <HomeContent />;
          }}
          keyExtractor={item => item.id}
        />
        <CollapsibleHeader
          ref={this.header}
          onLayout={this.onHeaderLayout}
          scrollY={this.scrollY}
          stickyHeaderHeight={stickyHeaderHeight}>
          <Text style={styles.sectionTitle}> With U, IU</Text>
          <TabBar onLayout={this.onStickyHeaderLayout} />
        </CollapsibleHeader>
      </>
    );
  }
}
let ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    margin: 20,
  },
});

export default Home;
