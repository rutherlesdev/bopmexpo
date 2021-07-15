import React, { Component, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Picker } from '@react-native-community/picker'

const FormDuoSelect = props => {
  const {
    attrs: { name },
    values,
    setFieldValue,
    options
  } = props



  const [selectedSuboption, setSelectedSubOption] = useState([])
  const [selectedOption, setSelectedOption] = useState(0)
  return (
    <>
      <Picker
        onValueChange={(itemValue, itemIndex) => {
            console.log(name)
            setSelectedOption(itemIndex)
          //setSubOptions(options[itemValue].options)
          setFieldValue(name, itemIndex)
            console.log(values[`${name}`])
        }}
        selectedValue={selectedOption}
      >
        {options.map(({ label, value }, index) => (
          <Picker.Item key={value} label={label} value={index} />
        ))}
      </Picker>
        {
            options[selectedOption].options && options[selectedOption].options.length > 0 && (
              <Picker
                onValueChange={(itemValue, itemIndex) => {
                    setFieldValue(name + '_category', itemIndex);
                    setSelectedSubOption(itemIndex);
                }}
                selectedValue={selectedSuboption}
              >
                {options[selectedOption].options.map(({ label, value }, index) => (
                  <Picker.Item key={value} label={label} value={index} />
                ))}
              </Picker>
        )}
    </>
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
export default FormDuoSelect
