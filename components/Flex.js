import { StyleSheet, Text, View } from "react-native";

export default function Flex() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          // alignSelf: "fletch-start",
        }}
      ></View>
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          flexBasis: 100,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100, // width or height
          flexGrow: 1,
        }}
      ></View>
      <View style={{ backgroundColor: "grey", width: 100, height: 100 }}></View>
      <View
        style={{ backgroundColor: "green", width: 100, height: 100 }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row", //horizontal
    justifyContent: "left", // main
    alignItems: "center", // secondary
    alignContent: "center",
    flexWrap: "wrap",
  },
});
