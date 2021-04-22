import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';

import colors from '../config/colors';

function AppButton({title, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.buttonBG}>
        <Text style={{color: colors.white, fontSize: 20}}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  buttonBG: {
    width: '100%',
    height: 60,
    backgroundColor: colors.yellow,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});

export default AppButton;
