import React, { useEffect } from 'react';
import { FlatList, Text, Image, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getDrinks, loading } from '../redux/drinks/drinksActions';
import * as API from '../services/api';

export const List = () => {
  const dispatch = useDispatch();
  const drinks = useSelector(state => state.drinks.drinks);
  const filter = useSelector(state => state.drinks.filter);
  const choiceArr = useSelector(state => state.drinks.choice);

  const getArrDrinks = arrCategory => {
    let obj = {};
    const promises = arrCategory.map(el => {
      dispatch(loading())
      return API.fetchDrinks(el)
        .then(data => {
          obj[el] = data;
          return true;
        })
        .catch(err => {
          console.log(err);
        });
    });
    Promise.all(promises).then(() => {
      dispatch(getDrinks(obj));
    });
  };

  useEffect(() => {
    if (choiceArr.length > 0) {
      getArrDrinks(choiceArr);
      return;
    }
    getArrDrinks(filter);
  }, [dispatch, filter, choiceArr]);

  return (
    <View style={styles.wrap}>
      <FlatList
        keyExtractor={item => item}
        data={Object.keys(drinks)}
        renderItem={({ item }) => (
          <>
            <Text style={styles.title}>{item}</Text>
            <FlatList
              keyExtractor={item => item.strDrink}
              data={drinks[item]}
              renderItem={({ item }) => (
                <View style={styles.block}>
                  <Image
                    style={styles.img}
                    source={{
                      uri: item.strDrinkThumb,
                    }}
                  />
                  <Text>{item.strDrink}</Text>
                </View>
              )}
            />
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    width: '80%',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 17,
  },
  img: {
    height: 90,
    width: 90,
    marginRight: 20,
  },
  block: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  }
});
