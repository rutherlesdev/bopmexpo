import { Formik } from 'formik'
import React from 'react'
import { View } from 'react-native'
import { Button, Layout, Text, TextInput } from 'react-native-rapi-ui'
import FormWrapper from '../components/form/FormWrapper'

export default function ({ navigation }) {
  return (
    <Layout>
      <View
        style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20
          }}
      >
            <Formik
              initialValues={{}}
              onSubmit={async values => {
                console.log(values); 
              }}>
              { formikObj => (
                <>
                      <Text>Em breve mais informações</Text>
                      <Text>Será permitido configurar e definir alguns valores por padrão</Text>
                      <TextInput placeholder="Nome completo"></TextInput>
                      <TextInput placeholder="Lotação"></TextInput>
                      <TextInput placeholder="Matrícula"></TextInput>

                      <Button text="SALVAR INFORMAÇÕES" ></Button>
                 </>
              )}
              </Formik>
      </View> 
    </Layout>
  )
}
