import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../config/colors';

function ButtonApp({title, color = 'yellow', textcolor = 'white'}) {
  return (
    <TouchableOpacity
      style={[styles.appbutton, {backgroundColor: colors[color]}]}>
      <Text style={{color: colors[textcolor]}}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appbutton: {
    width: '100%',
    height: 60,
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowOpacity: 0.2,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 12,
  },
});

export default ButtonApp;
