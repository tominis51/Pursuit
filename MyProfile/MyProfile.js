import React from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const ProfileWindow = () => {
  const profilePicture = require('../assets/logo.png');
  const headerBackground = require('../assets/backgroundSignIn.png');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageBackground source={headerBackground} style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      

        <View style={styles.content}>
          <Image source={profilePicture} style={styles.profilePicture} />
        </View>
        
        <Text style={styles.name}>John Doe</Text>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        
      
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    marginBottom: 20,
    left: '-30%',
    top: '-30%',
    color: 'white',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    left: '10%',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    left: '-25%',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
  
  editButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ProfileWindow;
