import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'
import { Layout, Text } from 'react-native-rapi-ui'
import { TopNav } from 'react-native-rapi-ui'
import { API_URL } from '../helpers/constants'
import { Ionicons } from '@expo/vector-icons'
import { Section, SectionContent, SectionImage } from 'react-native-rapi-ui'
import Loader from '../components/utils/Loader'

export default function ({ navigation }) {
  const [loading, setLoading] = useState(true)

  const [items, setItems] = useState([])
  useEffect(() => {

    const unsubscribe = navigation.addListener('focus', () => {

        setLoading(true);
        fetch(API_URL + '/boletim')
          .then(res => res.json())
          .then(res => {
            setItems(res.result)
          })
        .catch( err => console.log(err))
      .finally(() => setLoading(false))
        
    });

    return unsubscribe;

  }, [navigation])

  if (loading)
    return <Loader />

  return (
    <Layout>
      <TopNav middleContent='Procurar' />
      <View
        style={{
          flex: 1,
          padding: 20
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'RobotoCondensed_400Regular',
            marginBottom: 10,
            textTransform: 'uppercase'
          }}
        >
          PROCURAR
        </Text>

        <FlatList
          data={items}
          style={{ flex: 1 }}
          keyExtractor={el => el._id}
          renderItem={({ item }) => (
            <>
              <Section style={styles.container}>
                <SectionContent
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}
                >
                  <View>
                    <Text size='h3'>Matrícula: {item.matricula}</Text>
                    <Text size='h5'>Responsável: {item.responsavel}</Text>
                    <Text size='h6'>{new Date(item.createdAt).toLocaleDateString()} </Text>
                    <Text size='h6'>Código: {item._id}</Text>
                  </View>

                  <TouchableOpacity
                    style={{
                      backgroundColor: '',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      alignSelf: 'flex-end',
                      color: '#fff',
                      top: '0%'
                    }}
                    onPress={() => {
                      navigation.navigate('SearchItemDetailScreen', {
                        _id: item._id
                      })
                    }}
                  >
                    <Ionicons
                      size={25}
                      name='information-circle'
                      color='#535353'
                    />
                  </TouchableOpacity>
                </SectionContent>
              </Section>
            </>
          )}
        />
      </View>
    </Layout>
  )
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop: 10
  },
  flatListContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  }
})
