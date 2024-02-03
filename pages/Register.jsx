import React from "react";
import {  ImageBackground, StyleSheet, Text, View } from "react-native";
import RegisterForm from "../components/auth/registerForm";

export const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
       <ImageBackground
        source={require("../public/restaurant.jpg")}
        style={styles.image}
      >
        
      <RegisterForm />
      <Text style={styles.text}>Do you have an account? <Text style={styles.inlineText} onPress={()=>navigation.navigate("Login")}>Sign In</Text></Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text:{
    alignSelf:"center",
    margin:10,
    fontSize:20,
    color:"white"
  },
  inlineText:{
    color:"red"
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
