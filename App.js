import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoadingScreen from './LoadingScreen';
import SignUp from './SignUp';
import Account from './Account';
import MyProfile from './MyProfile';
import * as React from 'react';
import { NavigationContainer, TabNavigator, Screen } from '@react-navigation/native';
import SignIn from './SignIn';

export default function App() {
  return (
    <SignIn></SignIn>
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
