//import liraries
import React, { Component, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Collapsible from 'react-native-collapsible'

const FormGroup = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <Collapsible collapsed={isCollapsed}>
      <View style={styles.container}>{children}</View>
    </Collapsible>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

//make this component available to the app
export default FormGroup
