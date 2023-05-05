import React, { useRef } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ModalComp from "../Modal";
const Header = ({
  handleOpenBottomSheet,
  isBottomSheetOpen,
  handleCloseBottomSheet,
}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Text style={styles.logo}>Vivek Wallpaper</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white" }}>Oldest</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white" }}>Newest</Text>
          </TouchableOpacity>
        </View>
        {/* <Text></Text> */}
        <View>
          <Icon
            name="swap-vertical-circle"
            size={35}
            color="#FF8976"
            backgroundColor="#fff"
            onPress={handleOpenBottomSheet}
            // style={{ marginRight: 0 }}
            // iconStyle={{ margin: 0, padding: 0 }}
          />
        </View>
        {/* <ModalComp
          isBottomSheetOpen={isBottomSheetOpen}
          handleCloseBottomSheet={handleCloseBottomSheet}
        /> */}
      </View>
    </View>
  );
};

export default Header;
