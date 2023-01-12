import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import { GlobalStyles } from "./constants/styles";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarDays, far, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import IconButton from "./components/ui/IconButton";
import ExpensesContextProvider from "./store/expenses-context";


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator screenOptions={({navigation}) => ({
      headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
      headerTintColor: 'white',
      tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      tabBarInactiveTintColor: '#ccc',
      headerRight: ({tintColor}) => (
        <IconButton 
          icon={faPlusSquare} 
          size={24} 
          color={tintColor} 
          onPress={() => {
            navigation.navigate('ManageExpense');
          }} 
        />
      )
  })}>
      <BottomTabs.Screen 
        name="RecentExpenses" 
        component={RecentExpenses} 
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => <FontAwesomeIcon icon={faArrowAltCircleLeft} size={size} color={color}/>
        }} 
      />
      <BottomTabs.Screen 
        name="AllExpenses" 
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({color, size}) => <FontAwesomeIcon icon={faCalendarDays} size={size} color={color}/>
        }} 
      />
    </BottomTabs.Navigator>
  )
};

const App = () => {
  return (
    <>
      <StatusBar/>
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
            headerTintColor: 'white'
          }}>
            <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} options={{headerShown: false}}/>
            <Stack.Screen name='ManageExpense' component={ManageExpense} options={{
              presentation: 'modal',
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
};

const styles = StyleSheet.create({

});
StatusBar.setBarStyle('light-content', true);
library.add(far, faArrowAltCircleLeft);
library.add(far, faCalendarDays);
library.add(far, faPlusSquare);
export default App;
