import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TextInput, Button, CheckBox } from "react-native-rapi-ui";
import FormField from "../components/form/FormField";
import FormWrapper from "../components/form/FormWrapper";

import {
  formSchema,
  personSchema,
  objetosSchema,
  veiculoSchema,
  historicoSchema,
} from "../helpers/formSchema";
import { Layout, TopNav } from "react-native-rapi-ui";
import { Section, SectionContent } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { FieldArray, Formik } from "formik";
import FormGroup from "../components/form/FormGroup";
import PersonForm from "../components/widgets/PersonForm";
import ObjetosForm from "../components/widgets/ObjetosForm";
import VeiculoForm from "../components/widgets/VeiculoForm";
import HistoricoForm from "../components/widgets/HistoricoForm";
import { API_URL } from "../helpers/constants";

const validate = (values, props /* only available when using withFormik */) => {
  const errors = {};
  console.log("values" + JSON.stringify(values));

  if (!values.pai) {
    errors.pai = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.pai)) {
    errors.email = "Invalid email address";
  }




  //...

  return errors;
};

const NewBO = ({ navigation }) => {
  const [form, setForm] = useState(formSchema);
  const [pessoasForm, setPessoasForm] = useState(personSchema);
  const [objetosForm, setObjetosForm] = useState(objetosSchema);
  const [veiculoForm, setVeiculoForm] = useState(veiculoSchema);
  const [historicoForm, setHistoricoForm] = useState(historicoSchema);
  const [showPersonsForm, togglePersonsFormVisibility] = useState(false);
  const [showObjetosForm, toggleObjetosFormVisibility] = useState(false);

  const [loading, setLoading] = useState(false);
  const [dados, setDados] = React.useState("");








  const objetoAlert = () =>
  Alert.alert(
    "Adicionar novo objeto",
    "Você tem certeza que deseja adicionar um novo objeto ?",
    [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancelelado"),
        style: "cancel"
      },
      { text: "OK", onPress: () => setObjetosForm([...objetosForm, objetosSchema[0]]) }
    ],
    { cancelable: false }
  );



  const veiculoAlert = () =>
  Alert.alert(
    "Adicionar novo veículo",
    "Você tem certeza que deseja adicionar um novo veículo ?",
    [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancelelado"),
        style: "cancel"
      },
      { text: "OK", onPress: () => setVeiculoForm([...veiculoForm, veiculoSchema[0]]) }
    ],
    { cancelable: false }
  );





  const pessoaAlert = () =>
  Alert.alert(
    "Adicionar nova pessoa",
    "Você tem certeza que deseja adicionar uma nova pessoa ?",
    [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancelelado"),
        style: "cancel"
      },
      { text: "OK", onPress: () => setPessoasForm([...pessoasForm, personSchema[0]]) }
    ],
    { cancelable: false }
  );




  return (
    <Layout>
      <TopNav
        leftContent={<Ionicons name="chevron-back" size={20} color={"#000"} />}
        leftAction={() => navigation.goBack()}
        middleContent="Formulário"
      />

      <Section>
        <SectionContent>
          <Text
            style={{
              fontSize: 27,
              fontFamily: "RobotoCondensed_700Bold",
              marginBottom: 10,
            }}
          >
            BOLETIM DE OCORRÊNCIA - POLÍCIA MILITAR
          </Text>
          <FormWrapper>
            <Formik
              initialValues={{}}
              onSubmit={async (values) => {
                console.log(API_URL);
                fetch(API_URL + "/boletim", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                })
                  .then((res) => res.json())
                  .then((res) => {
                    console.log(res);
                    if (!res.error) {
                      alert("Dados salvos com sucesso");
                      navigation.goBack();
                    }
                  })
                  .catch((err) => {
                    Alert.alert(
                      "Erro",
                      "Ocorreu um erro ao processar sua requisiçao"
                    );

                    console.error(err);
                  });
              }}
            >
              {(formikObj) => (




                <View style={{ flex: 1, paddingBottom: 200 }}>
                  <FormGroup>
                    {form.map((formField, i) => (
                      <FormField
                        attrs={formField}
                        key={i}
                        formikObj={formikObj}
                      />
                    ))}
                  </FormGroup>
                  <View style={{ borderTop: 20 }}></View>

                  <FormGroup>
                    {pessoasForm.map((formFields, i) => (
                      <PersonForm
                        fields={formFields}
                        key={i}
                        index={i}
                        formikObj={formikObj}
                      />
                    ))}
                    <View style={{ padding: 10 }}></View>

                    <Button
                      color="gray"
                      onPress={pessoaAlert}
                      leftContent={
                        <Ionicons name="person" color="white" size={34} />
                      }
                      style={{ marginBottom: 10 }}
                      text="Adicionar Envolvido"
                    />

               




                  </FormGroup>

                  <View style={{ margin: 15 }}></View>

                  <FormGroup>
                    {objetosForm.map((formFields, i) => (
                      <ObjetosForm
                        fields={formFields}
                        key={i}
                        index={i}
                        formikObj={formikObj}
                      />
                    ))}
                    <View style={{ padding: 10 }}></View>

                    <Button
                      color="gray"
                     onPress={objetoAlert}
                      leftContent={
                        <Ionicons name="archive" color="white" size={34} />
                      }
                      style={{ marginBottom: 10 }}
                      text="Adicionar Objeto"
                    />
                  </FormGroup>

                  <View style={{ margin: 15 }}></View>

                  <FormGroup>
                    {veiculoForm.map((formFields, i) => (
                      <VeiculoForm
                        fields={formFields}
                        key={i}
                        index={i}
                        formikObj={formikObj}
                      />
                    ))}
                    <View style={{ padding: 10 }}></View>

                    <Button
                      color="gray"
                      onPress={
                        veiculoAlert
                      }
                      leftContent={
                        <Ionicons name="car" color="white" size={34} />
                      }
                      style={{ marginBottom: 10 }}
                      text="Adicionar Veículo"
                    />
                  </FormGroup>
                  <View style={{ padding: 10 }}></View>
                  <FormGroup>
                    {historicoForm.map((formFields, i) => (
                      <HistoricoForm
                        fields={formFields}
                        key={i}
                        index={i}
                        formikObj={formikObj}
                      />
                    ))}
                  </FormGroup>
                  <View style={{ padding: 10 }}></View>
                  <Button
                    loading={loading}
                    onPress={formikObj.handleSubmit}
                    text="Salvar"
                    
                  />
                   <View style={{ padding: 10 }}></View>
                </View>
                
              )}
            </Formik>
          </FormWrapper>
        </SectionContent>
      </Section>
    </Layout>
  );
};

export default NewBO;
