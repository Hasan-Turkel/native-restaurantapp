import React from "react";
import {
  FlatList,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useCallback } from "react";
import useReservationCalls from "../hooks/useReservationCalls";
import { useFocusEffect } from "@react-navigation/native";
import RestaurantCard from "../components/restaurant/restaurantCard";

const Restaurants = () => {
  const {
    loading,
    err,
    data: restaurants,
    getRestaurants,
  } = useReservationCalls();
  renderItem = ({ item }) => <RestaurantCard restaurant={item} />;
  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      getRestaurants();
    }, [])
  );

  return (
    <View style={styles.container}>
      <StatusBar />
      <ImageBackground
        source={require("../public/restaurant.jpg")}
        style={styles.image}
      >
        <FlatList
          // style={styles.list}
          data={restaurants}
          renderItem={renderItem}
        />
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
  image: {
    flex: 1,
    justifyContent: "space-around",
  },
});
export default Restaurants;
