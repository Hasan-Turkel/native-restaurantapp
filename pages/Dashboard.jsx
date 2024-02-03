import {
  Button,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useSelector } from "react-redux";

export const Dashboard = ({ navigation }) => {
  const { user } = useSelector((state) => state.auth);

  // console.log(navigation);
  return (
    <View style={styles.container}>
      <StatusBar />
      <ImageBackground
        source={require("../public/restaurant.jpg")}
        style={styles.image}
      >
        <Text style={styles.title}>Turkel's Restaurant</Text>

        <View style={styles.buttonContainer}>
          {!user && (
            <Button
              title="Sign In"
              onPress={() => navigation.navigate("Login")}
            />
          )}
        </View>

        <Text style={styles.text}> The Taste in the Center of Europe </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontSize: 35,
    textAlign: "center",
    backgroundColor: "black",
    padding: 5,
    borderRadius: 40,
    margin: 10,
  },
  title: {
    color: "white",
    fontSize: 35,
    textAlign: "center",
    backgroundColor: "black",
    padding: 5,
    borderRadius: 40,
    margin: 10,
  },
  image: {
    flex: 1,
    justifyContent: "space-around",
  },
  buttonContainer: {
    width: 200,
    alignSelf: "center",
  },
});
