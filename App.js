import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoadingScreen from './LoadingScreen/LoadingScreen';
import Account from './Account/Account';
import MyProfile from './MyProfile/MyProfile';
import * as React from 'react';
import { NavigationContainer, TabNavigator, Screen } from '@react-navigation/native';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';

export default function App() {
  return (
    <Account/>
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
