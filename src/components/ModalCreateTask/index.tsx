import React, { useState } from 'react';
import { Modal, ModalProps , Text, TouchableOpacity, View} from 'react-native';
import { styles } from './styles';
import ArrowLImg from '../../assets/Arrow.svg'
import { Input } from '../Input';
import { Button } from '../Button';
import { api } from '../../libs/api';

type Props = ModalProps & {
  OpenAndCloseModal: ()=> void;
  profileId?:string;
}


export function ModalCreateTask({OpenAndCloseModal , profileId,...rest}:Props) {

  const [titleTask , setTitleTask] = useState('')
  const [isLoading , setIsLoading] = useState(false)

  async function handleCreateTask(){

    if(!titleTask){
      return alert('title não foi fornecido')
    }
    setIsLoading(true)

    await api.post('/tasks', {
      title: titleTask,
      isChecking:false,
      profileId
    })
    setIsLoading(false)
  }

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
            onChangeText={setTitleTask}
          />


          <Button
            title='Create'
            onPress={handleCreateTask}
            isLoading={isLoading}
          />
        </View>

      
      </View>
    </Modal>
  );
}