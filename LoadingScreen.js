import React, { useState } from 'react';
import { View, Image, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity, ForgotPassword } from 'react-native';
import {SignIn} from './SignIn'; // Import the SignIn component from SignIn.js

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for 2 seconds
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('./assets/background.png')} style={{ flex: 1, resizeMode: 'cover' }} />
          <Image
            source={require('./assets/logo.png')}
            style={{
              width: 100,
              height: 100,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: [{ translateX: -50 }, { translateY: -50 }],
            }}
          />
        </View>
      ) : (
        <SignIn /> // Render the SignIn component when loading is finished
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default LoadingScreen;