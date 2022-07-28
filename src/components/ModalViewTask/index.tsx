import React, { useState } from 'react';
import { Button, FlatList, Image, Modal, ModalProps , ScrollView, Text, TouchableOpacity, View} from 'react-native';
import CircleX from '../../assets/CircleX.svg'
import { Task } from '../Task';
import { styles } from './styles';
import TodoListImg from '../../assets/to-do-list.png'

type Props = ModalProps & {
  OpenAndCloseModal: ()=> void
}


export function ModalViewTask({OpenAndCloseModal,...rest}:Props) {

  const [tasks , setTasks] = useState([
    {
      id:'1',
      title:'nova tarefa',
      check: false
    },
    {
      id:'2',
      title:'segunda tarefa',
      check: true
    },
    {
      id:'3',
      title:'segunda tarefa',
      check: true
    },
    {
      id:'4',
      title:'segunda tarefa',
      check: true
    },
    {
      id:'5',
      title:'segunda tarefa',
      check: true
    },
    {
      id:'6',
      title:'segunda tarefa',
      check: true
    },
    {
      id:'7',
      title:'segunda tarefa',
      check: true
    },
    {
      id:'8',
      title:'segunda tarefa',
      check: true
    },
    {
      id:'9',
      title:'segunda tarefa',
      check: true
    }
  ])



  return (
    <Modal transparent  animationType="slide" statusBarTranslucent {...rest}>
      <View style={styles.container}>
        <Text style={styles.title}>Tasks List</Text>
        <View style={styles.contentTask}>
         
          <View style={styles.header}>

            <Text style={styles.subTitle}>Daily Tasks</Text>

            <TouchableOpacity onPress={OpenAndCloseModal}>
              <CircleX
                width={30}
                height={30}
              />
            </TouchableOpacity>

          </View>


            <FlatList
              style={styles.containerTask}
              data={tasks}
              keyExtractor={item=> item.id}
              renderItem={({item})=> <Task isCheck={item.check} title={item.title}/>}
              contentContainerStyle={{paddingBottom:10}}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <View style={styles.containerMessageOption}> 
                  <Text style={styles.messageOption}>Sem nenhuma atividade</Text>
                  <Image source={TodoListImg}/>
                </View>
              }
            />

        </View>
      </View>
    </Modal>
  );
}