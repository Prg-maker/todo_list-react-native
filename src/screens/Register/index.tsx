import React from 'react';
import {  Text,  TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import RobotoImg from '../../assets/roboto.svg'
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import {useNavigation} from '@react-navigation/native'

import {useState} from 'react'
import { api } from '../../libs/api';

export function Register() {

  const [name , setName] = useState('')
  const [github , setGithub] = useState('')
  const [password , setPassword] = useState('')

  const [isLoadingButton , setIsLoadingButton] = useState(false)
  const [ isSuccess , setIsSuccess ] = useState(false)

  const Navigation = useNavigation()

  function handleNavigatorLogin(){
    Navigation.navigate('login')
  }

  async function handleRegister(){

    if(!name || name.length <= 3){
      return alert('The name does not provided')
    }
    if(!github || github.length <= 3){
      return alert('The github does not provided')
    }
    if(!password || password.length <= 7){
      return alert('The password does not provided')
    }

    
    setIsLoadingButton(true)

    await api.post('/', {
      name,
      password,
      github
    })

    setIsSuccess(true)
    setIsLoadingButton(false)
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
            isLoading={isLoadingButton}
            isSuccess={isSuccess}
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