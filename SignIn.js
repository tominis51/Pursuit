import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, ForgotPassword } from 'react-native';

function SignIn({}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Implement sign-in logic here
  };

  const handleForgotPassword = () => {
    // Implement password reset logic here
  };

  return (
    <>
<div>test</div>

      <Image
        source={require('./assets/logo1.png')}
        style={{
          width: 130,
          height: 130,
          position: 'absolute',
          top: '20%',
          left: '47.5%',
          transform: [{ translateX: -50 }, { translateY: -50 }],
        }}
      />

      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        width={300}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        width={300}
      />

      <TouchableOpacity onPress={handleForgotPassword}>
        <ForgotPassword />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSignIn} style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  form: {
    flex: 1,
    justifyContent: 'center',    
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    left: 20,
    top: '-2.5%',
    color: 'white',    
  },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    top: '-3%',
    left: '8.5%',    
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  button: {
    width: 250,
    height: 55,
    left: 50,
    top: 25,
    backgroundColor: '#007bff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SignIn;
