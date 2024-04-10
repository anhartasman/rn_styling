import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* border radius in Text only applies to Android */}
      <View style={[styles.box, styles.lightblueBg]}>
        <Text style={{ borderRadius: 5, backgroundColor: "red" }}>
          Lightblue Box
        </Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg]}>
        <Text>Lightgreen Box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  box: {
    width: 100,
    height: 100,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 5,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
});
