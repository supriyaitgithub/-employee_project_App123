import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import NavigateSwitch from './src/navigation/NavigateSwitch';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistors } from './src/redux/store';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistors}> */}
          <NavigationContainer>
            <NavigateSwitch />
          </NavigationContainer>
        {/* </PersistGate> */}
      </Provider>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
