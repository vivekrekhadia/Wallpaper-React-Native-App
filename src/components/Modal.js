import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
const sortArr = [
  {
    id: 1,
    title: "Landscapes & Naturee",
    desc: "Show landscapes and nature style first.",
  },
  {
    id: 2,
    title: "Animals",
    desc: "Show animals style first.",
  },
  {
    id: 3,
    title: "Food & Drinks",
    desc: "Show food and drinks style first.",
  },
  {
    id: 4,
    title: "Urban & Home",
    desc: "Show urban and home style first.",
  },
  {
    id: 5,
    title: "Holiday & Events",
    desc: "Show holiday and events style first.",
  },
  {
    id: 6,
    title: "Characters",
    desc: "Show characters style first.",
  },
];
const renderSortItem = ({ item }) => {
  return (
    // <TouchableHighlight underlayColor="rgba(73,182,77,0.9)">
    <View
      style={{
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 8,
        marginVertical: 8,
      }}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "black",
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}>
          {item.desc}
        </Text>
      </View>
    </View>
    // </TouchableHighlight>
  );
};
const ModalComp = ({ isBottomSheetOpen, handleCloseBottomSheet }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      //   style={{ height: "400" }}
      visible={isBottomSheetOpen}
      //   presentationStyle="pageSheet"
      onRequestClose={handleCloseBottomSheet}>
      <View
        style={styles.firstView}
        onStartShouldSetResponder={handleCloseBottomSheet}></View>
      <View style={styles.secondView}>
        {/* <Button title="close" onPress={handleCloseBottomSheet} /> */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: 15,
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "black",
            }}>
            Sorting By:
          </Text>
          <View style={{ borderRadius: 10 }}>
            <TouchableOpacity
              onPress={handleCloseBottomSheet}
              style={{
                backgroundColor: "black",
                borderWidth: 0,
                width: 50,
                alignItems: "center",
                borderRadius: 50,
                padding: 8,
              }}>
              <Text style={{ color: "white", fontSize: 20 }}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          data={sortArr}
          renderItem={renderSortItem}
          keyExtractor={(item) => `${item.id}`}
        />
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
