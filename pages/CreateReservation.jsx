import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import ReservationForm from '../components/restaurant/reservationForm';


const CreateReservation = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../public/restaurant.jpg")}
        style={styles.image}
      >
        <ReservationForm navigation={navigation}/>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default CreateReservation