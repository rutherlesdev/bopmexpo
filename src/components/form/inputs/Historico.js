import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";


const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
  }
})

const Historico = (props) => {
  return (
    <View style={styles.textAreaContainer} >
     



    <TextInput style={styles.textArea}
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      multiline
      numberOfLines={16}
      maxLength={400000}
    /> 

</View>

  );
};

export default Historico;
