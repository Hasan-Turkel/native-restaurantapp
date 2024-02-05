import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import ReservationForm from '../components/restaurant/reservationForm';
import useReservationCalls from '../hooks/useReservationCalls';


const CreateReservation = ({navigation}) => {
  const {sendReservation} = useReservationCalls(navigation);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../public/restaurant.jpg")}
        style={styles.image}
      >
        <ReservationForm buttonTitle="Create Reservation" func={sendReservation}/>
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