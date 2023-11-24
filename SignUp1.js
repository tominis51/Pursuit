import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default function SignUp1 () {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

  handleSignUp = () => {
    // Implement sign-in logic here
  };

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground source={require('./assets/backgroundSignIn.png')} resizeMode='cover' style={styles.image}>

          <Image
            source={require('./assets/logo1.png')}
            style={{
              width: 75,
              height: 75,
              position: 'absolute',
              top: '17.5%',
              left: '53%',
              transform: [{ translateX: -50 }, { translateY: -50 }],
            }}
          />

          <Text style={styles.title}>Sign Up</Text>

          <TextInput
            style={styles.input}
            placeholder="Full name"
            value={fullName}
            onChangeText={(fullName) => this.setState({ fullName })}
            width={275}
          />

          <TextInput
            style={styles.input}
            placeholder="abc@email.com"
            value={email}
            onChangeText={(email) => this.setState({ email })}
            width={275}
          />

          <TextInput
            style={styles.input}
            placeholder="Phone number"
            value={phoneNumber}
            onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
            width={275}
          />

          <TextInput
            style={styles.input}
            placeholder="Your password"
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => this.setState({ password })}
            width={275}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
            width={275}
          />

          <TouchableOpacity onPress={this.handleSignIn} style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', justifyContent: 'center', bottom: -100}}>
            <Text style={{ fontSize: 14, color: '#FFFFFF' }}>Already have an account? </Text>
            <TouchableOpacity style={styles.alreadyAccButton}>
              <Text style={styles.alreadyAccText}>Sign In</Text>
            </TouchableOpacity>
          </View>
          
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
    top: '1%',
    color: 'white',
  },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    top: '0%',
    left: '12.5%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  signUpButton: {
    width: 250,
    height: 55,
    left: 50,
    top: 10,
    backgroundColor: '#40DA46',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alreadyAccButton:{
    width: 50,
    height: 25,
  },
  alreadyAccText: {
    
    color: '#40DA46',

  },
  signUpButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  
});


