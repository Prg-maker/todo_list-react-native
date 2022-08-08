import React, { useEffect, useState } from 'react';
import { Button, FlatList, Image, Modal, ModalProps , ScrollView, Text, TouchableOpacity, View} from 'react-native';
import CircleX from '../../assets/CircleX.svg'
import { Task } from '../Task';
import { styles } from './styles';
import TodoListImg from '../../assets/to-do-list.png'
import { api } from '../../libs/api';



type Props = ModalProps & {
  OpenAndCloseModal: ()=> void;
  profileId?:string;
}


interface TasksProps{
  id:string;
  title:string;
  isChecking:boolean;

}


export function ModalViewTask({OpenAndCloseModal, profileId,...rest}:Props) {

  const [tasks , setTasks] = useState<TasksProps[]>([])

  useEffect(()=> {
    
    async function get(){
      const {data} = await api.get<TasksProps[]>(`/tasks/${profileId}`)
      console.log(data)
      setTasks(data)
    }

    get()



  },[])






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
              renderItem={({item})=> <Task isCheck={item.isChecking} title={item.title}/>}
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