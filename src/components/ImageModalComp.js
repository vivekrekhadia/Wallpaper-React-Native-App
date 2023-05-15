import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const ImageModalComp = ({ isImageModal, handleCloseImageModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      //   style={{ height: "400" }}
      visible={isImageModal}
      //   presentationStyle="pageSheet"
      onRequestClose={handleCloseImageModal}>
      <View style={styles.container}>
        {/* <Button title="close" onPress={handleCloseBottomSheet} /> */}
        <Text onPress={handleCloseImageModal}>Back</Text>
      </View>
    </Modal>
  );
};

export default ImageModalComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
    // shadowOpacity: 1,
    // border: "1 black",
    // borderRadius: 30,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: "black",
    display: "flex",
    alignItems: "center",
    shadowColor: "#ddd",
  },
});
