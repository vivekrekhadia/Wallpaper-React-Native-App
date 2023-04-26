import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Filter = ({windowHeight, isBottomSheetOpen, handleCloseBottomSheet}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      // We use the state here to toggle visibility of Bottom Sheet
      visible={isBottomSheetOpen}
      // We pass our function as default function to close the Modal
      onRequestClose={handleCloseBottomSheet}>
      <Text>VIVEK</Text>
    </Modal>
  );
};

export default Filter;
