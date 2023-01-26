import React, {useState} from "react"

import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import {styles} from './styles'


export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('')


  function handleNewParticipate(){
    if(participants.includes(participantName)){
      return Alert.alert('Participante existe', 'Já existe um participante na lista')
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
  }

  function handleRemove(name: string){
    Alert.alert('Remover', `Você deseja remover o participante ${name}?`,[
    {
      text: 'Sim',
      onPress: ()=> setParticipants(participants.filter(participant => participant != name))
    },
    {
      text: 'Não'
    }
  ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Terça-feira, 24 de janeiro de 2023</Text>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#cabdbd"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleNewParticipate}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.participantContainer}>
        <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item})=>(
          <Participant key={item} name={item} onRemove={handleRemove}/>
        )}
        ListEmptyComponent={()=> (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
        />
      </View>
      

      <StatusBar style="light" backgroundColor='tranparent' />
    </View>
  );
}