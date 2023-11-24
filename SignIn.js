import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { ForgotPassword } from './ForgotPassword';

export default function SignIn () {
  
  const handleSignUp = () => {
    // Implement sign-up logic here
  };
  

  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground source={require('./assets/backgroundSignIn.png')} resizeMode='cover' style={styles.image}>

          <Image
            source={require('./assets/logo1.png')}
            style={{
              width: 100,
              height: 100,
              position: 'absolute',
              top: '20%',
              left: '47.5%',
              transform: [{ translateX: -50 }, { translateY: -50 }],
            }}
          />

          <Text style={styles.title}>Sign In</Text>

          <TextInput
            style={styles.input}
            placeholder="abc@email.com"
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
            width={300}
          />

          <TextInput
            style={styles.input}
            placeholder="Your password"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            width={300}
          />

          <TouchableOpacity onPress={this.handleForgotPassword} style ={styles.button1}>
          <Text style={styles.buttonText1}>Forgot Password?</Text>
            
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handleSignIn} style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </ImageBackground>
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
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    left: 30,
    top: '-2.5%',
    color: 'white',
  },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 5,
    top: '-3%',
    left: '8.5%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  button: {
    width: 250,
    height: 55,
    left: 50,
    top: 10,
    backgroundColor: '#40DA46',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  button1: {
    left: '65%',
    top: '-2%',
  },
  buttonText1: {
    fontSize: 10,
    
    color: 'white',
  }
});


