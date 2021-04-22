import React from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../config/colors';

function ItemSeperator(props) {
  return (
    <View
      style={{
        height: 2.5,
        width: '100%',
        backgroundColor: colors.darkGrey,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ItemSeperator;
