import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { ModalCreateTask } from '../../components/ModalCreateTask';
import { ModalViewTask } from '../../components/ModalViewTask';
import { styles } from './styles';
import {useNavigation} from '@react-navigation/native'
import { api } from '../../libs/api';




export function Tasks() {
  const [isOpen , setIsOpen] = useState(true)
  const navigate = useNavigation()

  function handleIsOpen(){
    setIsOpen(!isOpen)
  }
  const data = navigate.getState()


  const dataProfile = data.routes[3].params?.profile



  return (
    <View style={styles.container}>
      

      <View style={styles.header}>
        <Image  style={styles.avatar} source={{uri:`https://github.com/${dataProfile?.github}.png`}}/>
        <Text style={styles.name}>Welcome {dataProfile?.name}</Text>
      </View>

      {
        isOpen? <ModalViewTask profileId={dataProfile?.profileId} OpenAndCloseModal={handleIsOpen}/> : <ModalCreateTask OpenAndCloseModal={handleIsOpen}/>
      }

    </View>
  );
}