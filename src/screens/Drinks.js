import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { List } from '../components/List';
import { getFilter } from '../redux/drinks/drinksOperations';
import { Loader } from '../components/Loader';
import { Error } from '../components/Error';

export const Drinks = () => {
  const dispatch = useDispatch();
  const loader = useSelector(state => state.drinks.isLoading);
  const error = useSelector(state => state.drinks.isError);

  useEffect(() => {
    dispatch(getFilter());
  }, []);

  return (
    <>
      {loader && <Loader />}
      {error && <Error />}
      <View style={styles.container}>
        <List />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
