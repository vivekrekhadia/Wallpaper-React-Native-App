import { View, Text, Modal, Button, StyleSheet, Pressable } from "react-native";
import React from "react";

const ModalComp = ({ isBottomSheetOpen, handleCloseBottomSheet }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      //   style={{ height: "400" }}
      visible={isBottomSheetOpen}
      //   presentationStyle="pageSheet"
      onRequestClose={handleCloseBottomSheet}>
      <View style={styles.firstView}></View>
      <View style={styles.secondView}>
        <Button title="close" onPress={handleCloseBottomSheet} />
      </View>
    </Modal>
  );
};

export default ModalComp;
const styles = StyleSheet.create({
  firstView: {
    backgroundColor: "transparent",
    flex: 1,
  },
  secondView: {
    flex: 1,
    backgroundColor: "#fff",
    // borderRadius: 30,
    borderColor: "black",
    display: "flex",
    alignItems: "center",
    shadowColor: "#ddd",
  },
});
