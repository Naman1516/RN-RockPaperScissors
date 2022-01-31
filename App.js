import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";

import PlayScreen from "./src/PlayScreen";

export default function App() {
  const [play, setPlay] = useState(false);
  return play ? (
    <PlayScreen />
  ) : (
    <View style={styles.container}>
      <Text style={styles.header}>Rock Paper Scissors</Text>
      <Text style={{ fontSize: 45 }}>👊✋✌️</Text>
      <View style={styles.button}>
        <Button title="Play" onPress={() => setPlay(true)}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
    width: 250,
  },
});
