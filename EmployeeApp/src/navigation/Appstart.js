 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import AddEmployee from '../screen/AddEmployee';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
 

const Stack = createNativeStackNavigator();

const AppStart =() => {
  const {navigate} = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} 
      options={{
        headerTitle: () => (
          <TouchableOpacity onPress={() => navigate('AddEmployee')}>
            <AntDesign name="plus" size={44} color="#377c24" />
          </TouchableOpacity>
        ),
        headerTitleAlign: 'center',
      }}/>
      <Stack.Screen name="AddEmployee" component={AddEmployee} />
     </Stack.Navigator>
  );
}
export default AppStart;
