//import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DatePicker from 'react-native-datepicker'

// create a component
const FormDatePicker = props => {
  const { name, values, setFieldValue, ...rest } = props

  return (
    <DatePicker
      style={{ width: 200 }}
      date={values[name]}
      mode='datetime'
      placeholder='Selecione a Hora'
      confirmBtnText='Confirmar'
      format='DD/MM/YYYY'
      cancelBtnText='Cancelar'
      showIcon={false}
      onDateChange={date => {
        setFieldValue(name, date)
      }}
    />
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

//make this component available to the app
export default FormDatePicker
