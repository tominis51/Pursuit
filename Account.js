import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Account () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>

      <View style={styles.profileSection}>
        <Text style={styles.profileName}>FirstName</Text>
      </View>

      <View style={styles.optionsSection}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>My profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileName: {
    fontSize: 20,
  },
  profilePursuits: {
    fontSize: 16,
    color: '#ccc',
  },
  optionsSection: {
    marginTop: 20,
  },
  option: {
    padding: 10,
    borderRadius: 10,
  },
  optionText: {
    fontSize: 18,
  },
});

//export default Account;
