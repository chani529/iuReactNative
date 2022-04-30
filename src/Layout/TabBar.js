import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const TABS = [
  {
    title: 'Home',
    key: 0,
  },
  {
    title: 'Album',
    key: 1,
  },
  {
    title: 'Filmography',
    key: 2,
  },
  {
    title: 'AD',
    key: 3,
  },
  {
    title: 'History',
    key: 4,
  },
  {
    title: 'Board',
    key: 5,
  },
];

class TabBar extends React.Component {
  state = {
    selected: 0,
  };

  onViewLayout = ({
    nativeEvent: {
      layout: {height, y},
    },
  }) => {
    const {onLayout} = this.props;
    onLayout && onLayout(height, y);
  };

  onTabChange = selected => {
    this.setState(
      {
        selected,
      },
      () => {
        const {onChange} = this.props;
        onChange && onChange(this.state.selected);
      },
    );
  };

  render() {
    const {selected} = this.state;
    return (
      <View style={styles.container} onLayout={this.onViewLayout}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={TABS}
          keyExtractor={item => '' + item.key}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={() => this.onTabChange(index)}>
              <Text
                style={[
                  styles.tab,
                  selected === index ? styles.selectedTab : null,
                ]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#F16581',
    // backgroundColor: '#000000',
  },
  tab: {
    fontSize: 14,
    color: 'white',
    padding: 10,
    marginRight: 10,
  },
  selectedTab: {
    borderBottomWidth: 3,
    borderBottomColor: 'white',
  },
});

export default TabBar;
