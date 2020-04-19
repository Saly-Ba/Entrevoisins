import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

const voisins = require('./voisins.json');

export default FlatListBasics = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {image: require('./assets/image.jpeg'), key: voisins.voisin1.name , icon: require('./assets/icons8-effacer-24.png')},
            {image: require('./assets/image.jpeg'), key: 'Dan', icon: require('./assets/icons8-effacer-24.png')},
            {image: require('./assets/image.jpeg'), key: 'Dominic', icon: require('./assets/icons8-effacer-24.png')},
            {image: require('./assets/image.jpeg'), key: 'Jackson', icon: require('./assets/icons8-effacer-24.png')},
            {image: require('./assets/image.jpeg'), key: 'James', icon: require('./assets/icons8-effacer-24.png')},
            {image: require('./assets/image.jpeg'), key: 'Joel', icon: require('./assets/icons8-effacer-24.png')},
            {image: require('./assets/image.jpeg'), key: 'John', icon: require('./assets/icons8-effacer-24.png')},
          ]}
          renderItem={({item}) => 
          <View style={styles.item}>
            <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
              <Image source={item.image}
                style={styles.image}
              />
              <Text style={styles.name}>{item.key}</Text>
            </View>
            <Image source={item.icon}  
            />
          </View>}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    flex: 1,
    padding: 10,
    fontSize: 18,
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth : 1,
    
  },
  image: {
    width: 60, 
    height: 60, 
    borderRadius: 60/ 2,
    padding : 20,
  },
  name: {
    color: 'gray',
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 20,
  }
})
