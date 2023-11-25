import React from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ProfilePic } from '../ProfilePic'

const Account = () => {
  return (
    <ImageBackground source={require('../assets/backgroundSignIn.png')} resizeMode='cover' style={styles.image}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}>Account</Text>

        <TouchableOpacity onPress={this.handleSignIn} style={styles.button}>
        <Image source={require('../assets/ArrowBack.png')} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
        <Text style={styles.nameTitle}>Domas</Text>
        <Text style={styles.pursuitAmount}>4 Pursuits</Text>
      </View>


      <View>
      <TouchableOpacity onPress={this.handleSignIn} style={styles.profileButton}> 
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../assets/Profile.png')} style={{ width: 26, height: 26, left: '0%' }} />
              <Text style={styles.profileText}>My profile</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handleSignIn} style={styles.logOutButton}> 
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../assets/LogOut.png')} style={{ width: 26, height: 26, left: '0%' }} />
              <Text style={styles.logOutText}>Log Out</Text>
            </View>
          </TouchableOpacity>
      </View>
      

      <View style={styles.profilePiccontainer}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.profilePic}
      />
      
    </View>
    
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    left: '0%',
    top: '-32.5%',
    color: 'white',
  },
  nameTitle:{
    fontSize: 24,
    
    left: '5%',
    top: '-35%',
    color: 'white',
  },
  pursuitAmount:{
    fontSize: 18,
    marginBottom: 20,
    left: '5%',
    top: '-35%',
    color: 'white',
  },
  button: {
    left: '-35%',
    bottom: "40%",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 90,
    height: 90,
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  profilePiccontainer: {
    bottom: '74%',
    left: '12.5%',
    width: 100,
    height: 100,
    borderRadius: parseInt('50%', 10),
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#ccc',
  },
  profileButton:{
    width: 120,
    height: 40,
    left: '10%',
    bottom: '430%',
    borderRadius: 10,
    justifyContent: 'center',
  },
  profileText:{
    fontSize: 16,
    left: '10%',
    color: 'white',
  },
  logOutButton:{
    width: 120,
    height: 40,
    left: '10%',
    bottom: '50%',
    borderRadius: 10,
    justifyContent: 'center',
  },
  logOutText:{
    fontSize: 16,
    left: '10%',
    color: 'white',
  }
});

export default Account;