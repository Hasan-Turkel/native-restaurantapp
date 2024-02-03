
import { Button, Text, View } from "react-native";
import useBlogCalls from "../../../hooks/useBlogCalls";
import styles from "./DeleteCard.style";

const DeleteCard = ({ id, navigation, setDeleteModal }) => {
  const { delBlog } = useBlogCalls(navigation);
  const handleDel = () => {
    delBlog(id);
    setDeleteModal(false)
  };

  return (
   <View style={styles.container}>

<Text style={styles.title}>ATTENTİON</Text>
<Text>You are about to delete the blog! This process can not be undone! Are you sure about this?</Text>

<View style={styles.buttonContainer}>
<Button onPress={()=>setDeleteModal(false)} title="No, cancel please." />

<Button onPress={handleDel} title="Yes I'm sure." color="red" />

</View>

   </View>
  );
};

export default DeleteCard;