import React, {useEffect, useState} from 'react'
import { Linking, View, ScrollView } from 'react-native'
import { Button, Layout, TopNav, Text, theme } from 'react-native-rapi-ui'
import { Ionicons } from '@expo/vector-icons'
import {API_URL, MAIN_URL} from "../helpers/constants";
import { formSchema } from '../helpers/formSchema';
import Loader from '../components/utils/Loader';

export default function ({ route, navigation }) {

  const [loading, set_loading]  = useState(true);
  const [boletim, set_boletim ] = useState({});
  const { _id } = route.params;

  useEffect(() => {
      set_loading(true);
      console.log(API_URL + '/boletim/' + _id)
      
      try {
        (async function(){
          let req = await fetch(API_URL + '/boletim/' + _id);
          let res = await req.json();
          await set_boletim(res.result);
        })();
      } catch (e) {
          console.log('Ocorreu um erro ao realizar a requisição:');
          console.log(e);
      } finally {
          set_loading(false);
      }

  }, [_id]);

  if (loading)
    return <Loader />
  
  return (
    <Layout>
      <TopNav
        middleContent='Detalhes da ocorrência'
        leftContent={
          <Ionicons name='chevron-back' size={20} color={theme.black} />
        }
        leftAction={() => navigation.goBack()}
      />
      <ScrollView style={{flex: 1, padding: 20}}>

      <View
        style={{
          flex: 1
        }}
      >
        <Text fontWeight='bold' size={'h1'} style={{ marginBottom: 20}}>Resumo da Ocorrência</Text>

          {/*********************************************************/}
          {
             boletim.mike != "undefined" && <>
               <Text size={'h4'}>{boletim.mike}</Text>
               <Text fontWeight='bold' size={'h6'} style={{marginBottom: 15}}>MIKE</Text>
             </>
          }

          {
              boletim.responsavel != "undefined" && <>
                  <Text size={'h4'}>{boletim.responsavel}</Text>
                  <Text fontWeight='bold' size={'h6'} style={{marginBottom: 15}}>Responsável</Text>
              </>
          }

          {
              boletim.matricula != "undefined" && <>
                  <Text size={'h4'}>{boletim.matricula}</Text>
                  <Text fontWeight='bold' size={'h6'} style={{marginBottom: 15}}>Matrícula</Text>
              </>
          }

          {
              boletim.createdAt && <>
                  <Text size={'h4'}>{new Date(boletim.createdAt).toLocaleDateString()}</Text>
                  <Text fontWeight='bold' size={'h6'} style={{marginBottom: 15}}>Data de criação</Text>
              </>
          }

         {
             
          }          

          <Button text="FAZER DOWNLOAD PDF" style={{marginVertical: 40 }} onPress={ async () => {
            try {
                console.log(API_URL + '/generateReport/' + _id)
                let req = await fetch(API_URL + '/generateReport/' + _id);
                let {url} = await req.json();

                await Linking.openURL(`${MAIN_URL}/${url}`);
            } catch (e) {
                console.log(e)
            }

        }}></Button>
      </View>
      </ScrollView>

    </Layout>
  )
}
