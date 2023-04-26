import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Header = ({handleOpenBottomSheet}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Text style={styles.logo}>Vivek Wallpaper</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Oldest</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Newest</Text>
          </TouchableOpacity>
        </View>
        <Icon.Button
          name="swap-vertical-circle"
          size={35}
          color="#FF8976"
          backgroundColor="#fff"
          onPress={handleOpenBottomSheet}
          // styles={{marginRight: 100}}
        />
      </View>
    </View>
  );
};

export default Header;
