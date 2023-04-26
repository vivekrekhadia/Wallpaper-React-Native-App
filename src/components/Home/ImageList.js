import React from 'react';
import {View, FlatList, Image, StyleSheet} from 'react-native';
import img0 from '../../assets/IMG_0390.jpg';
import img1 from '../../assets/IMG_0391.jpg';

import img2 from '../../assets/IMG_0392.jpg';

import img3 from '../../assets/IMG_0393.jpg';

import img4 from '../../assets/IMG_0394.jpg';

import img5 from '../../assets/IMG_0395.jpg';
import {styles} from './Styles';

const DATA = [
  {
    id: '1',
    imageUri: img0,
  },
  {
    id: '2',
    imageUri: img1,
  },
  {
    id: '3',
    imageUri: img2,
  },
  {
    id: '4',
    imageUri: img3,
  },
  {
    id: '5',
    imageUri: img4,
  },
  {
    id: '6',
    imageUri: img5,
  },
  {
    id: '7',
    imageUri: img0,
  },
  {
    id: '8',
    imageUri: img1,
  },
  {
    id: '9',
    imageUri: img2,
  },
  {
    id: '10',
    imageUri: img3,
  },
];

const ImageList = () => {
  const renderItem = ({item}) => (
    <View style={styles.imageContainer}>
      <Image source={item.imageUri} style={styles.image} />
    </View>
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

export default ImageList;
