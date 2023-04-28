import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import ImageList from "./ImageList";
import Header from "./Header";

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
        <Header handleOpenBottomSheet={handleCloseBottomSheet} />
        <ImageList />
        {/* </View> */}

        {/* <Filter
            windowHeight={windowHeight}
            isBottomSheetOpen={isBottomSheetOpen}
            handleCloseBottomSheet={handleCloseBottomSheet}
          /> */}
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
});
