import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ProfilePic = ({ source }) => {
  return (
    <View style={styles.container}>
      <Image
        source={source}
        style={styles.profilePic}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#ccc',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 20,
    height: 20,
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
});

export default ProfilePic;