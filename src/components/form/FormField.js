//FormikTextInputt liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-rapi-ui";
//import { TextInput } from "react-native";

import FormDatePicker from "./inputs/FormDatePicker";
import FormHora from "./inputs/FormHora";

import Historico from "./inputs/Historico";

import FormTimePicker from "./inputs/FormTimePicker";
import FormSelect from "./inputs/FormSelect";
import FormDuoSelect from "./inputs/FormDuoSelect";
import Datahora from "./inputs/Datahora";

// create a component
const FormField = ({ attrs, formikObj }) => {
  const { title, subtitle, placeholder, name, ...otherProps } = attrs;
  const { handleChange, values } = formikObj;

  console.log(values);

  const renderInputComponent = () => {
    switch (attrs.inputType) {
      case "text":
        return (
          <TextInput
            placeholder={placeholder}
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={handleChange(name)}
            value={values[name]}
            {...formikObj}
          />
        );
        break;
      case "date":
        return (
          <FormDatePicker attrs={attrs} value={values[name]} {...formikObj} />
        );
        break;

      case "time":
        return <FormHora attrs={attrs} value={values[name]} {...formikObj} />;
        break;

      case "textLongo":
        return (
          <Historico
            placeholder={placeholder}
            onChangeText={handleChange(name)}
            value={values[name]}
            {...formikObj}
          />
        );

        break;

      case "select":
        return (
          <FormSelect
            attrs={attrs}
            {...formikObj}
            onChange={handleChange(name)}
            value={values[name]}
            {...otherProps}
          />
        );
        break;
      case "duo_select":
        return (
          <FormDuoSelect
            attrs={attrs}
            value={values[name]}
            {...formikObj}
            {...otherProps}
          />
        );
        break;
      default:
        break;
    }
  };

  return (
    <View>
      {title && <Text style={styles.form_field_label}>{title}</Text>}
      {subtitle && <Text style={styles.form_field_subtitle}>{subtitle}</Text>}
      <View style={styles.px10}>{renderInputComponent()}</View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  px10: { paddingVertical: 10 },
  form_field_label: {
    fontSize: 13,
    fontFamily: "RobotoCondensed_400Regular",
    marginBottom: 10,
    textTransform: "uppercase",
  },
  form_field_subtitle: {
    fontSize: 11,
    color: "gray",
    fontFamily: "RobotoCondensed_400Regular",
    marginBottom: 10,
  },
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default FormField;
