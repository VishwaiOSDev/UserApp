import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

import colors from '../config/colors';
import ButtonApp from './ButtonApp';
import FloatIcon from './FloatIcon';
colors;

function ListItem({prodname, price, offer}) {
  return (
    <View style={{flex: 1, marginTop: 10}}>
      <View style={{width: '100%'}}>
        <FloatIcon image={require('../assets/heart.png')} />
        <FloatIcon image={require('../assets/share.png')} style={{top: 70}} />
        <Image source={require('../assets/glass.png')} style={styles.image} />
      </View>
      <View style={{padding: 20}}>
        <Text style={styles.title}>{prodname}</Text>
        <Text style={styles.subtitle}>
          Full Rim Round, Cat-eyed Anti Glare Frame(48 mm)
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
          <Text style={styles.priceText}>₹{price}</Text>
          <Text style={styles.cutoff}>₹999</Text>
          <Text style={styles.offer}>{offer}% off</Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <ButtonApp title="ADD TO CART" color="white" textcolor="black" />
        <ButtonApp title="BUY NOW" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  priceText: {
    color: colors.black,
    fontSize: 30,
    fontWeight: 'bold',
  },
  cutoff: {
    textDecorationLine: 'line-through',
    fontSize: 20,
    color: colors.darkGrey,
    paddingHorizontal: 10,
  },
  offer: {
    color: 'green',
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    color: colors.darkGrey,
  },
  subtitle: {
    fontSize: 16,
    color: colors.darkGrey,
    marginVertical: 10,
  },
  image: {
    resizeMode: 'contain',
  },
});

export default ListItem;
