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
      {/* <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='ListingPage' component={ListingPage} />
      <Stack.Screen name='AddListing' component={AddListing} />
      <Stack.Screen name='UploadImage' component={UploadImage} /> */}

      {/* <Stack.Screen name="Login" component={Login} /> */}

      <Stack.Screen options={screenOptions} name='AppStart' component={AppStart} />
    </Stack.Navigator>
  );
};

export default NavigateSwitch;