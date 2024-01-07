import { StyleSheet, Text, Image, ImageBackground, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={require("../assets/background.jpg")}
      />
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.text}>Sell what you don't need</Text>
      </View>

      <View
        style={{
          backgroundColor: "#fc5c65",
          width: "100%",
          height: 60,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "#4ECDC4",
          width: "100%",
          height: 60,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },

  logoContainer: {
    width: 100,
    height: 100,
    position: "absolute",
    left: 150,
    top: 80,
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    width: 160,
  },
});
