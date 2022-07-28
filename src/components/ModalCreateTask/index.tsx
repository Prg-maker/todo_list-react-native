import React, { useState } from 'react';
import { Modal, ModalProps , Text, TouchableOpacity, View} from 'react-native';
import { styles } from './styles';
import ArrowLImg from '../../assets/Arrow.svg'
import { Input } from '../Input';
import { Button } from '../Button';

type Props = ModalProps & {
  OpenAndCloseModal: ()=> void
}


export function ModalCreateTask({OpenAndCloseModal,...rest}:Props) {

 



  return (
    <Modal transparent  animationType="slide" statusBarTranslucent {...rest}>
      <View style={styles.container}>
        <Text style={styles.title}>Create Task</Text>


        <View style={styles.contentTask}>
          <TouchableOpacity onPress={OpenAndCloseModal} style={{width:35}}>
            <ArrowLImg/>
          </TouchableOpacity>

          <Text style={styles.titleName}>Crie uma tarefa Daniel</Text>

          <Input
            placeholder='crie um tarefa'
          />


          <Button
            title='Create'
          />
        </View>

      
      </View>
    </Modal>
  );
}