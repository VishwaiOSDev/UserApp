import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ItemSeperator from '../components/ItemSeperator';
import ProductApi from '../api/api';

function HomeScreen({navigation}) {
  useEffect(() => {
    //Get Request Code...
    getRequest();
  }, []);

  const [responseArray, setIsResponseArray] = useState([]);
  const [refreshing, setRefresing] = useState(false);

  async function getRequest() {
    try {
      const dataFetch = await ProductApi.get('/user/all');
      // console.log(dataFetch.data);
      //   validResponse.push(dataFetch.data);
      setIsResponseArray(dataFetch.data);
      console.log(responseArray);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Screen style={styles.container}>
      <View style={{alignItems: 'flex-end', padding: 10}}>
        <Text
          onPress={() => {
            navigation.navigate('Login');
            navigation.reset({
              index: 0,
              routes: [{name: 'Login'}],
            });
          }}
          style={{color: 'red', fontSize: 16, fontWeight: '600'}}>
          Sign Out
        </Text>
      </View>
      <FlatList
        data={responseArray}
        keyExtractor={responseArray => responseArray.id}
        onRefresh={getRequest}
        refreshing={refreshing}
        renderItem={({item}) => (
          <ListItem
            prodname={item.prodname}
            price={item.price}
            offer={item.offer}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeperator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;
