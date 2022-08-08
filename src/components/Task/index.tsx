import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { api } from '../../libs/api';
import theme from '../../theme';
import { CheckBox } from '../CheckBox';

interface Props{
  title: string;
  isCheck: boolean;
  taskId:string
}


export function Task({title, isCheck , taskId}:Props) {


  async function handleToggleIsCheck(){

    await api.put('/task', {
      taskId
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleTask}>{title}.</Text>
      <CheckBox
        toggleIsCheck={handleToggleIsCheck}
        isCheck={isCheck}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom: 21
  },
  titleTask:{
    fontFamily: theme.fonts.fontsMedium
  }
})