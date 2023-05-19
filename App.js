
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screen/HomeScreen';
import CreateBill from './Screen/CreateBill';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
     <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='                            BUDGET ENTRY' component={HomeScreen}  />
        <Stack.Screen name='CreateBill' component={CreateBill} />
      </Stack.Navigator>
     </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
