import React from 'react';
import {  Text,  TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import RobotoImg from '../../assets/roboto.svg'
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import {useNavigation} from '@react-navigation/native'

import {useState} from 'react'

export function Register() {

  const [name , setName] = useState('')
  const [github , setGithub] = useState('')
  const [password , setPassword] = useState('')

  const Navigation = useNavigation()

  function handleNavigatorLogin(){
    Navigation.navigate('login')
  }

  async function handleRegister(){

    if(!name || password.length <= 3){
      alert('The name does not provided')
    }
    if(!github || password.length <= 3){
      alert('The name does not provided')
    }
    if(!password || password.length <= 8){
      alert('The name does not provided')
    }

    Navigation.navigate('tasks')
  } 




  return (
    <View style={styles.container}>

      <Text style={styles.title}>WELCOME ONBOARD!</Text>
      <Text style={styles.subtitle}>Let’s hope you meet of your tasks!</Text>
      <RobotoImg style={styles.img}/>


        <Input
          placeholder='Enter your name'
          onChangeText={setName}
        />
        <Input
          placeholder='Enter your github'
          onChangeText={setGithub}
        />
        <Input
          placeholder='Enter your password'
          keyboardType='visible-password'
          onChangeText={setPassword}
        />

        <View style={styles.containerSubmit}>
          <Button
            title='Registration'
            onPress={handleRegister}
          />

          <View style={styles.containerLink}>

            <Text style={styles.textLink}>Already have an account? </Text>

            <TouchableOpacity onPress={handleNavigatorLogin}>
              <Text style={styles.buttonLink}>Sing In</Text>
            </TouchableOpacity>
          </View>
        </View>
      
    </View>
  );
}