import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./RestaurantCard.style";


const RestaurantCard = ({ restaurant}) => {

  return (
   
      <View style={styles.container}>
        <Image
        style={styles.image}
        source={require("../../../public/restaurant.jpg")}
      />
        <Text style={styles.text}>Branch: {restaurant?.branchName}</Text>
        <Text style={styles.text}>Address: {restaurant?.address}</Text>
        <Text style={styles.text}>Working Days: {restaurant?.days}</Text>
        <Text style={styles.text}>Working Hours: {restaurant?.hours}</Text>
      </View>
  );
};

export default RestaurantCard;
