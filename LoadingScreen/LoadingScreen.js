import React, { useState } from 'react';
import { View, Image, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity, ForgotPassword } from 'react-native';
import SignIn from '../SignIn/SignIn';
import SignUp1 from '../SignUp/SignUp';

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
          <ImageBackground source={require('../assets/background.png')} style={styles.image} >
            <Image
              source={require('../assets/logo.png')}
              style={{
                width: 100,
                height: 100,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: [{ translateX: -50 }, { translateY: -50 }],
              }}
            />
          </ImageBackground>
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
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});

export default LoadingScreen;
