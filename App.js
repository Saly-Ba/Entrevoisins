import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { heigh, width } = Dimensions.get('window');

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={['#DA4453', '#89216B']}>
      <Text style={styles.appTitle}>New neighbour</Text>
      <Image 
          source={require('./assets/image.jpeg')}  
          style={styles.image} 
      />
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Phone number" />
        <TextInput style={styles.input} placeholder="Address" />
        <TextInput style={[styles.input, styles.about]} placeholder="About me"/>
        <Button style={styles.button}
          onPress={() => {}}
          title="Save"
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  card:{
    flex: 1,
    width: width - 25,
    //alignItems: 'center',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 60,
    marginBottom: 30,
    fontWeight: '300'
  },
  input: {
    marginTop: 20,
    padding: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 24
  },
  image: {
    width: 90, 
    height: 90, 
    borderRadius: 90/ 2,
    padding : 20,
  },
  about:{
    marginBottom : 20,
    maxHeight: 100,
  },
  button: {
    borderRadius: 50,
  }
});
