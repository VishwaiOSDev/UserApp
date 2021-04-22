import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import colors from '../config/colors';

function FloatIcon({image, style}) {
  return (
    <View style={[styles.floatIcon, style]}>
      <Image source={image} style={styles.floatImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  floatIcon: {
    backgroundColor: colors.white,
    width: 50,
    height: 50,
    position: 'absolute',
    borderRadius: 50,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 12,
    shadowOpacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    right: 12,
  },
  floatImage: {
    width: 20,
    height: 20,
  },
});

export default FloatIcon;
