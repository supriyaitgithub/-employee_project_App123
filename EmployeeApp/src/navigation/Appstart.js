 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import AddEmployee from '../screen/AddEmployee';
import EmployeeDetails from '../screen/EmployeeDetails';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
 

const Stack = createNativeStackNavigator();

const AppStart =() => {
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="EmployeeDetails" component={EmployeeDetails} />
      <Stack.Screen name="AddEmployee" component={AddEmployee} />
     </Stack.Navigator>
  );
}
export default AppStart;
