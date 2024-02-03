
import { Button, Text, View } from "react-native";
import useBlogCalls from "../../../hooks/useBlogCalls";
import styles from "./CancelCard.style";

const CancelCard = ({ id, setCardId, setCancelModal, getReservations }) => {
  const { cancelReservation  } = useBlogCalls();
  const handleDel = () => {
    cancelReservation(id);
    setCancelModal(false);
    setCardId("");
    setTimeout(() => {
      getReservations();
    }, 1000);
  };

  return (
   <View style={styles.container}>

<Text style={styles.title}>ATTENTİON</Text>
<Text>You are about to cancel the reservation! This process can not be undone! Are you sure about this?</Text>

<View style={styles.buttonContainer}>
<Button onPress={()=>{setCancelModal(false); setCardId("")}} title="No, cancel please." />

<Button onPress={handleDel} title="Yes I'm sure." color="red" />

</View>

   </View>
  );
};

export default CancelCard;