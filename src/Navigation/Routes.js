import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Search from './Search';
import Settings from './Settings';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import ShowHome from './ShowHome';
import ShowSearch from './ShowSearch'
import ShowSettings from './ShowSettings'

const HomeStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  const HomeScreen = () => (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="ShowHome" component={ShowHome} />
    </HomeStack.Navigator>
  )

  const SearchScreen = () => (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} />
      <SearchStack.Screen name="ShowSearch" component={ShowSearch} />
    </SearchStack.Navigator>
  )

  const SettingsScreen = () => (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} />
      <SettingsStack.Screen name="ShowSettings" component={ShowSettings} />
    </SettingsStack.Navigator>
  )

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "red", 
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "lightgreen", 
          position:"absolute", 
          borderRadius: 50,
          bottom: 20,
          marginHorizontal: 16
        }
      }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarBadge: 5,
            tabBarIcon: ({focused}) => <Icon name="home" size={28} color={focused ? "red" : "gray"} />
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({focused}) => <Icon name="search" size={28} color={focused ? "red" : "gray"}  />
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({focused}) => <Icon name="settings" size={28} color={focused ? "red" : "gray"}  />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

    // const header = (title) => ({
    //   title: title,
    //   headerStyle: {backgroundColor: 'lightblue'},
    //   headerTitleStyle: {
    //     fontSize: 28,
    //     fontWeight: '400',
    //   },
    //   headerTintColor: 'red',
    //   headerTitleAlign: 'center',
    //   headerLeft: () => (
    //     <TouchableOpacity onPress={() => alert('Menu clicked')}>
    //       <Icon name="menu" size={40} color="black" />
    //     </TouchableOpacity>
    //   ),
    //   headerRight: () => (
    //     <TouchableOpacity onPress={() => alert('Search clicked')}>
    //       <Icon name="search" size={28} color="black" />
    //     </TouchableOpacity>
    //   ),
    // });