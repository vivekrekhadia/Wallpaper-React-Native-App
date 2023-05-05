import {
  Button,
  Dimensions,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useMemo, useRef, useState } from "react";
import ImageList from "./ImageList";
import Header from "./Header";
import ModalComp from "../Modal";
// import { styles } from "./Styles";

// import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const Home = (props) => {
  const windowHeight = Dimensions.get("window").height;

  // This state would determine if the drawer sheet is visible or not
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // Function to open the bottom sheet
  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  // Function to close the bottom sheet
  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <>
      <SafeAreaView style={Styles.container}>
        {/* <View style={Styles.container}> */}
        <Header
          handleOpenBottomSheet={handleOpenBottomSheet}
          isBottomSheetOpen={isBottomSheetOpen}
          handleCloseBottomSheet={handleCloseBottomSheet}
        />
        <ImageList />
        <ModalComp
          isBottomSheetOpen={isBottomSheetOpen}
          handleCloseBottomSheet={handleCloseBottomSheet}
        />
      </SafeAreaView>
    </>
  );
};

export default Home;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "#fcfcfc",
  },

  centeredView: {
    flex: 1,
    position: "relative",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    height: 400,
    // margin: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    // padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
