import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Picker } from '@react-native-community/picker'

const FormSelect = props => {
  const {
    attrs: { name },
    values,
    setFieldValue,
    options
  } = props
  return (
    <Picker
      onValueChange={itemValue => setFieldValue(name, itemValue)}
      
      selectedValue={values[name]}
      
    >
      
      {options.map(({ label, value }) => (
 
        <Picker.Item key={value} label={label} value={value} />
        
      ))}
    </Picker>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  }
})

//make this component available to the app
export default FormSelect
