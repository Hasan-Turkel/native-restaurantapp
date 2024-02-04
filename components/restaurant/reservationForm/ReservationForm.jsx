import React, { useRef, useState } from "react";
import { Button, Text, View } from "react-native";
import styles from "./ReservationForm.style";
import { useCallback } from "react";
import useReservationCalls from "../../../hooks/useReservationCalls";
import { useFocusEffect } from "@react-navigation/native";
import moment from "moment";
import Mili from "miliseconds";
import SelectDropdown from "react-native-select-dropdown";
import DateTimePickerModal from "react-native-modal-datetime-picker";


const ReservationForm = ({navigation}) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  

    const maxDate = new Date(+new Date() + new Mili().days(13).value());
    const minDate = new Date(+new Date() + new Mili().days(1).value());
    const [values, setValues] = useState({branchId: "", date: minDate, hour:""})
    const dropdownRef = useRef({}); 
  const {
    loading,
    err,
    data: restaurants,
    getRestaurants, sendReservation } = useReservationCalls(navigation);

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      getRestaurants();
    }, [])
  );
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
              Restaurants* (Please choose by clicking.)
            </Text>
            <SelectDropdown buttonStyle={styles.option} ref={dropdownRef}  
              data={restaurants}
              onSelect={(selectedItem, index) => {
                setValues({...values, branchId:selectedItem._id});
                // console.log(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem.branchName;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item.branchName;
              }}
            />
            <Text style={styles.text} onPress={()=>setDatePickerVisibility(true)}>
              Date* (Please choose by clicking.)
            </Text>
            <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={(date)=>{console.log(date); setDatePickerVisibility(false)} }
        onCancel={()=>setDatePickerVisibility(false)}
        maximumDate={maxDate}
        minimumDate={minDate}
      />
            <Text style={styles.text} onPress={()=>setTimePickerVisibility(true)}>
              Hour* (Please choose by clicking.)
            </Text>

            <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={(date)=>{console.log(new Date(+date+ new Mili().hours(3).value())); setTimePickerVisibility(false)} }
        onCancel={()=>setTimePickerVisibility(false)}
       
      />
            
            <Button
  onPress={()=>sendReservation(values)}
  title="Create New Reservaion"
/>



    </View>
  );
};

export default ReservationForm;
