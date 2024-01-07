import {
  Dimensions,
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
  useWindowDimensions,
} from "react-native";

import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  console.log(useWindowDimensions());
  const orientation = useDeviceOrientation();
  console.log({ orientation });
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: orientation === "landscape" ? "100%" : "30%",
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
