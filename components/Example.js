import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  Image,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
} from "react-native";

export default function Example() {
  const handlePress = () => console.log("clicked");

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      {/* numberOfLines = elipse si trop long */}
      <Text numberOfLines={1} onPress={handlePress}>
        Hello youuu !
      </Text>
      <TouchableOpacity onPress={() => console.log("img tExampleed")}>
        <Button
          title="Click me"
          onPress={() =>
            Alert.alert("My title", "My message", [
              { text: "yes", onPress: () => console.log("yes") },
              { text: "no", onPress: () => console.log("no") },
            ])
          }
        ></Button>
        <Button
          title="Click me prompt"
          onPress={() =>
            Alert.prompt("My title", "My message", (text) => console.log(text))
          }
        ></Button>
        <Image
          // blurRadius={5}
          // loadingIndicatorSource={("https://picsum.photos/200/300", 300)}
          fadeDuration={500}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity>
      {/* <Image source={require("./assets/splash.png")} /> */}
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "salmon" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // paddingTop: Platform.OS === "android" ? 20 : 0,
    alignItems: "center",
    // justifyContent: "center",
  },
});
