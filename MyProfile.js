import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';



const Header = () => {
  return (
    <View style={header}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>My Profile</Text>
      <Button title="Edit Details" onPress={() => {}} />
    </View>
  );
};

export default function MyProfile () {
  const [userPicture, setUserPicture] = useState('https://example.com/profile-picture.jpg');
  const [userName, setUserName] = useState('Domas Šestakovas');
  const [userEmail, setUserEmail] = useState('domas@gmail.com');
  const [userPhone, setUserPhone] = useState('+37082338232');

  return (
    <View style={styles.container}>
      <Header />

      <section style={styles.userInfo}>
        <Image source={{ uri: userPicture }} style={styles.profilePicture} />

        <View style={styles.userDetails}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userDescription}>2</Text>
        </View>

        <View style={styles.contactInfo}>
          <Text style={styles.contactLabel}>Email:</Text>
          <Text style={styles.contactInfoText} onPress={() => {}}>
            {userEmail}
          </Text>
        </View>

        <View style={styles.contactInfo}>
          <Text style={styles.contactLabel}>Phone:</Text>
          <Text style={styles.contactInfoText} onPress={() => {}}>
            {userPhone}
          </Text>
        </View>

        <Button title="Change Password" onPress={() => {}} />
      </section>

      <nav style={styles.profileNav}>
        <Button title="Explore" onPress={() => {}} />
        <Button title="Map" onPress={() => {}} />
        <Button title="Pursuits" onPress={() => {}} />
        <Button title="Account" onPress={() => {}} />
      </nav>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userDetails: {
    marginBottom: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userDescription: {
    fontSize: 14,
    color: '#666',
  },
  contactInfo: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  contactLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
  },
  contactInfoText: {
    fontSize: 14,
    color: '#333',
  },
  profileNav: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

//export default MyProfile;
