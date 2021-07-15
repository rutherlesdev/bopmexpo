//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormField from '../form/FormField';

// create a component
const ObjetosForm = ({fields, formikObj, index}) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight:'bold' ,fontSize:20,paddingBottom:5 ,color:'#e24533'}}>Dados do Veículo{index+1}</Text>
            {
                fields.map( (field, idx) => (
                    <FormField 
                    attrs={{...field, name:  `veiculo.${index}.${field.name}`}}
                    name={`veiculo.${index}.${field.name}`}
                    formikObj={formikObj} />
                ))
            }
           
        </View>
        )
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default ObjetosForm;
