//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

// create a component
const FormTimePicker = props => {
	const { 
		attrs: { name},   
		formikObj: {
			handleChange,  values
		} } = props;

	return (
		<View style={styles.container}>
			<TextInputMask
				type={'HH:mm'}
				onChangeText={handleChange(name)}
				value={values[name]}
			/>
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	}
});

//make this component available to the app
export default FormTimePicker;
