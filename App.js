import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Drinks } from './src/screens/Drinks';
import { Filter } from './src/screens/Filter';
import store from './src/redux/store';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Drinks">
          <Stack.Screen
            name="Drinks"
            component={Drinks}
            options={({ navigation }) => ({
              headerTitle: 'Drinks',
              headerRight: () => (
                <FontAwesome.Button
                  name="filter"
                  size={24}
                  color="black"
                  backgroundColor="white"
                  iconStyle={{ paddingRight: 20 }}
                  onPress={() => navigation.navigate("Filter")}
                />
              ),
            })}
          />
          <Stack.Screen name="Filter" component={Filter} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
