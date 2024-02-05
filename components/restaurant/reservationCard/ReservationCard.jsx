import React from "react";
import styles from "./ReservationCard.style";
import { Button, Image, Text, View } from "react-native";


const ReservationCard = ({ reservation, setCancelModal, setCardId, setUpdateModal }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../public/restaurant.jpg")}
      />
      <Text style={styles.text}>
        Restaurant: {reservation.branchId.branchName}
      </Text>
      <Text style={styles.text}>Date: {reservation.date.slice(0, 10)}</Text>
      <Text style={styles.text}>Time: {reservation.hour}</Text>
      <Text
        style={
          new Date(reservation.date) < new Date() ||
          reservation.situation == "canceled"
            ? styles.redText
            : styles.text
        }
      >
        Situation:{" "}
        {new Date(reservation.date) < new Date()
          ? "OUT of DATE"
          : reservation.situation.toUpperCase()}
      </Text>

      {reservation.situation == "reserved" &&
        new Date(reservation.date) > new Date() && (
          <View style={styles.buttonContainer}>
            <Button onPress={()=>{setUpdateModal(true); setCardId(reservation._id)}} title="Update" />
            <Button onPress={()=>{setCancelModal(true); setCardId(reservation._id)}} title="Cancel" color="red" />
          </View>
        )}
         
    </View>
  );
};

export default ReservationCard;
