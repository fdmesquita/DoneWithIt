import { StyleSheet, Text, Image, ImageBackground, View } from "react-native";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            backgroundColor: "#fc5c65",
            width: 50,
            height: 50,
            margin: 10,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#4ECDC4",
            width: 50,
            height: 50,
            margin: 10,
          }}
        ></View>
      </View>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    height: 100,
    width: "100%",
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  footer: {
    height: 150,
    width: "100%",
    backgroundColor: "black",
  },
});
