const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    // marginHorizontal: 10,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
  },
  logo: {
    // fontStyle: 'sans-sarif',
    fontSize: 25,
    color: '#000',
  },
  buttonContainer: {
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 25,
    // width: 100,
  },
  button: {
    backgroundColor: 'black',
    borderWidth: 0,
    width: 100,
    alignItems: 'center',
    borderRadius: 30,
    padding: 8,
    marginLeft: 8,
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  headerContainer: {
    // marginHorizontal: 10,
    marginLeft: 10,
    marginRight: 15,
    // marginVertical: 20,
  },
});
