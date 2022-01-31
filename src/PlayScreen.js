import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-web";

const rock = require("./signs/rock.png");
const paper = require("./signs/paper.png");
const scissors = require("./signs/scissors.png");

const bgColors = ["#1abc9c", "#2ecc71", "#3498db"];

const randomImg = () => {
  const emojis = [rock, paper, scissors];
  const randomNum = Math.floor(Math.random() * 3);
  return emojis[randomNum];
};

randomImg();

const PlayScreen = () => {
  const [counter, setCounter] = useState(3);
  useEffect(() => {
    if (counter < 1) {
      return;
    }
    const timer = setTimeout(() => {
      setCounter((prv) => prv - 1);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [counter]);

  return (
    <View
      style={StyleSheet.compose(
        { backgroundColor: bgColors[counter - 1] },
        styles.container
      )}
    >
      {counter < 1 ? (
        <>
          <Image style={styles.sign} source={randomImg()} />
          <View style={styles.button}>
            <Button onPress={() => setCounter(3)} title="Play Again"></Button>
          </View>
        </>
      ) : (
        <Text style={styles.counter}>{counter}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  counter: {
    fontSize: 120,
    color: TouchableWithoutFeedback,
  },
  sign: {
    width: 220,
    height: 220,
  },
  button: {
    position: "absolute",
    bottom: 40,
  },
});

export default PlayScreen;
