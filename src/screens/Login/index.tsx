import React, { useState } from 'react';
import {  Text,  TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import RobotoImg from '../../assets/studenRobot.svg'
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Login() {


  const [name , setName] = useState('')
  const [password , setPassword] = useState('')

  const Navigation = useNavigation()
  
  function handleNavigatorRegister(){
    Navigation.navigate('register')
  }

  async function handleLogin(){
    if(!name || name.length <= 3){
      return alert('The name does not provided')
    }
    if(!password || password.length <= 7){
      return alert('The password does not provided')
    }
  }



  return (
    <View style={styles.container}>

      <Text style={styles.title}>WELCOME BACK!</Text>
      <RobotoImg style={styles.img}/>


     
        <Input
          placeholder='Enter your username'
          onChangeText={setName}
        />
        <Input
          placeholder='Enter your password'
          keyboardType='visible-password'
          onChangeText={setPassword}

        />
        <View style={styles.containerSubmit}>
          <Button
            title='Login'
          />

          <View style={styles.containerLink}>

            <Text style={styles.textLink}>Don’t have an account? </Text>

            <TouchableOpacity onPress={handleNavigatorRegister}>
              <Text style={styles.buttonLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      
    </View>
  );
}