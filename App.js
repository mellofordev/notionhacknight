
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';
import Home from './Components/screens/Home';
import AddExpense from './Components/screens/AddExpense';

const Tab =createBottomTabNavigator();
export default function App() {


 
  return (
    
       <NavigationContainer>
        <Tab.Navigator screenOptions={{
          tabBarShowLabel:false,
          tabBarStyle:{backgroundColor:'#181818'}

        }}>
            <Tab.Screen component={Home}  name={'Home'} 
             options={{
               tabBarIcon:({focused})=>{
                 return(
                   <View>
                      <Feather name='home' size={24} color={focused?'white':'B3B3B3'}/>
                   </View>
                 );
               },
               headerStyle:{backgroundColor:'black'},
               headerTitleStyle:{color:'white'}
             }}
            />
            <Tab.Screen component={AddExpense} name={'Add'} 
             options={{
               tabBarIcon:({focused})=>{
                 return(
                   <View>
                      <Feather name='plus-circle' size={24} color={focused?'white':'B3B3B3'}/>
                   </View>
                 );
               },
               headerStyle:{backgroundColor:'black'},
               headerTitleStyle:{color:'white'}
             }}
            />
        </Tab.Navigator>
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
