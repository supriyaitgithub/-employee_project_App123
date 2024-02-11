import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStart from './Appstart';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
  };

const NavigateSwitch = () => {
  return (
    <Stack.Navigator name={'NavigateSwitch'}>
      <Stack.Screen options={screenOptions} name='AppStart' component={AppStart} />
    </Stack.Navigator>
  );
};

export default NavigateSwitch;