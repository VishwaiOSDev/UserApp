import React from 'react';
import {View, StyleSheet, Image, TextInput} from 'react-native';

import colors from '../config/colors';

function AppTextInput({title, image, ...otherProps}) {
  return (
    <View style={styles.inputContainer}>
      <Image style={styles.image} source={image} />
      <TextInput style={styles.textInput} placeholder={title} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderBottomColor: colors.darkGrey,
    borderBottomWidth: 1,
    padding: 10,
    marginTop: 20,
    width: '100%',
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  textInput: {
    width: '100%',
    paddingHorizontal: 10,
    color: colors.black,
    fontSize: 16,
  },
});

export default AppTextInput;
