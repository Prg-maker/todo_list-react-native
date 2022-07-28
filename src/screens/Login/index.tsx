import React from 'react';
import {  Text,  TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import RobotoImg from '../../assets/studenRobot.svg'
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Login() {


  const Navigation = useNavigation()
  
  function handleNavigatorRegister(){
    Navigation.navigate('register')
  }



  return (
    <View style={styles.container}>

      <Text style={styles.title}>WELCOME BACK!</Text>
      <RobotoImg style={styles.img}/>


     
        <Input
          placeholder='Enter your username github'
        />
        <Input
          placeholder='Enter your password'
          keyboardType='visible-password'
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