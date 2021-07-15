import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, Linking, TouchableOpacity } from 'react-native'
import {
  Layout,
  Button,
  Text,
  Section,
  SectionImage,
  SectionContent
} from 'react-native-rapi-ui'
import { Ionicons } from '@expo/vector-icons'


export default function ({ navigation }) {
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginHorizontal: 20,
          flexDirection: 'column'
        }}
      >
        <Section style={{ width: '100%' }}>
          <TouchableOpacity
            onPress={() => {
              alert('Disponível em breve')
            }}
          >
            <SectionImage
              height={260}
              source={require('../../assets/img/paladino.jpg')}
            />
          </TouchableOpacity>
          <SectionContent>
            <Text>Sistema de Registro Policial</Text>
          </SectionContent>
        </Section>

        <Section style={{ width: '100%' }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('NewBO')
            }}
            style={{
              backgroundColor: 'rgb(34, 34, 34)',
              paddingHorizontal: 40,
              paddingVertical: 20
            }}
          >
            <View
              // Background Linear Gradient  #232526, #414345
              style={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Ionicons
                name='newspaper-outline'
                size={60}
                color='white'
                style={{ marginBottom: 20 }}
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 22,
                  textTransform: 'capitalize',
                  color: 'white',
                  fontFamily: 'RobotoCondensed_700Bold_Italic',
                  fontStyle: 'italic'
                }}
              >
                BOLETIM DE OCORRÊNCIA
              </Text>
            </View>
          </TouchableOpacity>
        </Section>

        <Section style={{ width: '100%' }}>
          <TouchableOpacity
            onPress={() => {
              alert('Disponível em breve')
            }}
            style={{
              backgroundColor: 'rgb(34, 34, 34)',
              paddingHorizontal: 40,
              paddingVertical: 20
            }}
          >
            <View
              // Background Linear Gradient  #232526, #414345
              style={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Ionicons
                name='md-shield-checkmark-outline'
                size={60}
                color='white'
                style={{ marginBottom: 20 }}
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 22,
                  textTransform: 'capitalize',
                  color: 'white',
                  fontFamily: 'RobotoCondensed_700Bold_Italic',
                  fontStyle: 'italic'
                }}
              >
                OPERAÇÕES
              </Text>
            </View>
          </TouchableOpacity>
        </Section>
      </View>
    </Layout>
  )
}
