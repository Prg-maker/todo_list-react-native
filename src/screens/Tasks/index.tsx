import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { ModalCreateTask } from '../../components/ModalCreateTask';
import { ModalViewTask } from '../../components/ModalViewTask';
import { styles } from './styles';



export function Tasks() {
  const [isOpen , setIsOpen] = useState(true)

  function handleIsOpen(){
    setIsOpen(!isOpen)
  }

  return (
    <View style={styles.container}>
      

      <View style={styles.header}>
        <Image  style={styles.avatar} source={{uri:'https://github.com/prg-maker.png'}}/>
        <Text style={styles.name}>Welcome Daniel</Text>
      </View>

      {
        isOpen? <ModalViewTask OpenAndCloseModal={handleIsOpen}/> : <ModalCreateTask OpenAndCloseModal={handleIsOpen}/>
      }

    </View>
  );
}