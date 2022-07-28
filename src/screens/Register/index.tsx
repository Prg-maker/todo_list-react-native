import React from 'react';
import {  Text,  TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import RobotoImg from '../../assets/roboto.svg'
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Register() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>WELCOME ONBOARD!</Text>
      <Text style={styles.subtitle}>Let’s hope you meet of your tasks!</Text>
      <RobotoImg style={styles.img}/>


        <Input
          placeholder='Enter your name'
        />
        <Input
          placeholder='Enter your github'
        />
        <Input
          placeholder='Enter your password'
          keyboardType='visible-password'
        />
        <View style={styles.containerSubmit}>
          <Button
            title='Registration'
          />

          <View style={styles.containerLink}>

            <Text style={styles.textLink}>Already have an account? </Text>

            <TouchableOpacity >
              <Text style={styles.buttonLink}>Sing In</Text>
            </TouchableOpacity>
          </View>
        </View>
      
    </View>
  );
}