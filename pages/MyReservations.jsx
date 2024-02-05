import React, { useState } from "react";
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
import ReservationCard from "../components/restaurant/reservationCard";
import Modal from "react-native-modal";
import CancelCard from "../components/restaurant/cancelCard";
import UpdateCard from "../components/restaurant/updateCard";
import useAuthCalls from "../hooks/useAuthCalls";

const MyReservations = () => {
  const [cancelModal, setCancelModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [cardId, setCardId] = useState("");
  const {
    loading,
    err,
    data: reservations,
    getReservations,
  } = useReservationCalls();
  const {logout} = useAuthCalls()
  renderItem = ({ item }) => (
    <ReservationCard
      reservation={item}
      setCancelModal={setCancelModal}
      setCardId={setCardId}
      setUpdateModal={setUpdateModal}
    />
  );
  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      getReservations();
    }, [])
  );

  // console.log(cardId);
  return (
    <View style={styles.container}>
      <StatusBar />
      <ImageBackground
        source={require("../public/restaurant.jpg")}
        style={styles.image}
      >
        <Text style={styles.logout} onPress={()=> logout()}>Logout</Text>
        <FlatList
          style={styles.list}
          data={reservations}
          renderItem={renderItem}
        />
      </ImageBackground>
      <Modal
        isVisible={cancelModal}
        onBackdropPress={() => {
          setCancelModal(false);
          setCardId("");
        }}
      >
        <CancelCard
          id={cardId}
          getReservations={getReservations}
          setCardId={setCardId}
          setCancelModal={setCancelModal}
        />
      </Modal>
      <Modal isVisible={updateModal}
       onBackdropPress={() => {
        setUpdateModal(false);
        setCardId("");
      }}
       >
         <UpdateCard getReservations={getReservations} id={cardId} setCardId={setCardId}
          setUpdateModal={setUpdateModal}/>
      </Modal>
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
  list: {
    flex: 1,
  },
  logout:{
    color:"white",
    textAlign:"right",
    padding:10,
    fontSize:30,
    backgroundColor:"black"
  }
});

export default MyReservations;
