import { Formik } from "formik";
import { useState, useCallback, useRef } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { useFocusEffect } from '@react-navigation/native';

const NewBlog = ({ navigation }) => {
  const categoryRef = useRef({}); 
  const statusRef = useRef({}); 
  const { sendBlog, data: cat, getCat } = useBlogCalls(navigation);
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const statuses = ["draft", "publish"];
  // console.log(cat);
  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      getCat()
      
    }, [])
  );
  
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          title: "",
          image: "",
          content: "",
        }}
        onSubmit={(values, action) => {
          sendBlog({
            ...values,
            category: category,
            status: status == "draft" ? "d" : "p",
          });
          action.resetForm();
          action.setSubmitting(false);
          categoryRef.current.reset()
          statusRef.current.reset()
          // console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <>
            <Text style={styles.text}>Title*</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
            />
            <Text style={styles.text}>
              {errors.title && touched.title && errors.title}
            </Text>
            <Text style={styles.text}>Image Url*</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("image")}
              onBlur={handleBlur("image")}
              value={values.image}
            />
            <Text style={styles.text}>
              {errors.image && touched.image && errors.image}
            </Text>
            <Text style={styles.text}>Content*</Text>

            <TextInput
              style={styles.input}
              multiline={true}
              numberOfLines={10}
              onChangeText={handleChange("content")}
              onBlur={handleBlur("content")}
              value={values.content}
            />
            <Text style={styles.text}>
              {errors.content && touched.content && errors.content}
            </Text>

            <Text style={styles.text}>
              Categories* (Please choose by clicking.)
            </Text>
            <SelectDropdown buttonStyle={styles.option} ref={categoryRef}  
              data={cat}
              onSelect={(selectedItem, index) => {
                setCategory(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem.name;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item.name;
              }}
            />
            <Text style={styles.text}>
              Status* (Please choose by clicking.)
            </Text>
            <SelectDropdown buttonStyle={styles.option} ref={statusRef} 
              data={statuses}
              onSelect={(selectedItem, index) => {
                setStatus(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />

            <Button
              disabled={isSubmitting}
              onPress={handleSubmit}
              title="New Blog"
            />
          </>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "grey",
    padding: 10,
    textAlignVertical: 'top'
  },
  text: {
    fontWeight: "bold",
  },
  container: {
    padding: 10,
    flex: 1,
  },
  option:{
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "grey",
    padding: 10,
    margin:5
  }
});
export default NewBlog;
