import React, { useState } from 'react';
import { StyleSheet, Text, FlatList, Button, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { choice, removeChoice, clearChoice } from '../redux/drinks/drinksActions';
import { useEffect } from 'react';

export const Filter = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearChoice([]))
  }, [])

  const [toggle, setToggle] = useState({});
  const filter = useSelector(state => state.drinks.filter);
  const choiceArr = useSelector(state => state.drinks.choice);

  const handleClick = item => {
    const clickAgain = choiceArr.find(el => el === item);
    if (clickAgain) {
      dispatch(removeChoice(clickAgain));
      return;
    }
    dispatch(choice(item));
  };

  const handleCheckbox = (item, newValue) => {
    handleClick(item)
    setToggle({ ...toggle, [item]: newValue })
  }

  return (
    <View style={styles.wrap}>
      <FlatList
        keyExtractor={item => item}
        data={filter}
        renderItem={({ item }) => (
          <View style={styles.block}>
            <Text >{item}</Text>
            <CheckBox title={item} value={toggle[item]}
              onValueChange={(newValue) => handleCheckbox(item, newValue)}
              tintColors={{ true: '#000', false: '#000' }}
            />
          </View>
        )}
      />
      <View style={styles.btn} >
        <Button color='#000' title="APPLY" onPress={() => navigation.navigate('Drinks')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    width: '80%',
    marginLeft: 45,
    paddingTop: 15
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'space-between'
  },
  btn: {
    width: '80%',
    marginLeft: 45,
    marginBottom: 15,
  }
});
