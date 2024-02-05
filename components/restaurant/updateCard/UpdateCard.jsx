import React from 'react'
import { Text, View } from 'react-native'
import ReservationForm from '../reservationForm'
import useReservationCalls from '../../../hooks/useReservationCalls';
import styles from "./UpdateCard.style"
import { Ionicons } from '@expo/vector-icons';


const UpdateCard = ({setUpdateModal, setCardId, getReservations, id}) => {
  const {updateReservation} = useReservationCalls();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>UPDATE RESERVATION</Text>
        <Ionicons name="close" size={24} color="grey" onPress={()=> {setUpdateModal(false), setCardId("")}}/>
      </View>
      <ReservationForm buttonTitle="Update" func={updateReservation} getReservations={getReservations} id={id} setUpdateModal={setUpdateModal}/>
    </View>
  )
}

export default UpdateCard