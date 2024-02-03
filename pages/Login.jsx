import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import LoginForm from "../components/auth/loginForm";

export const Login = ({ navigation }) => {
  // console.log(navigation);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../public/restaurant.jpg")}
        style={styles.image}
      >
        <LoginForm />
        <Text style={styles.text}>
          Don't you have an account?{" "}
          <Text
            style={styles.inlineText}
            onPress={() => navigation.navigate("Register")}
          >
            Sign Up
          </Text>
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    margin: 10,
    fontSize: 20,
    color: "white",
  },
  inlineText: {
    color: "red",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
