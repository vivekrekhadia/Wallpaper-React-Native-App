const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    // marginHorizontal: 10,
    marginHorizontal: 10,
    paddingBottom: 10,
    // marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // position: 'absolute',
  },
  logo: {
    // fontStyle: 'sans-sarif',
    fontSize: 25,
    color: "#000",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    // marginBottom: 10,
    marginTop: 25,
    // marginRight: 10,
    // width: 100,
  },
  button: {
    backgroundColor: "black",
    borderWidth: 0,
    width: 100,
    alignItems: "center",
    borderRadius: 30,
    padding: 8,
    // marginLeft: 8,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    // flex: 1,
  },
  headerContainer: {
    marginHorizontal: 20,
    // marginLeft: 12,
    // marginRight: 10,
    // marginVertical: 20,
  },
});
