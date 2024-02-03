import React from 'react'
import { FlatList, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import  { useCallback } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { useFocusEffect } from '@react-navigation/native';
import ReservationCard from '../components/restaurant/reservationCard';


const MyReservations = () => {

  const { loading, err, data:reservations, getReservations } = useBlogCalls();
  renderItem = ({ item }) => <ReservationCard reservation={item} />;
  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      getReservations()
      
    }, [])
  );

  // console.log(reservations);
  return (
    <View style={styles.container}>
    <StatusBar />
    <ImageBackground
      source={require("../public/restaurant.jpg")}
      style={styles.image}
    >
       <FlatList
        // style={styles.list}
        data={null}
        renderItem={renderItem}
      />
      
    </ImageBackground>
  </View>
  )
}

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

export default MyReservations