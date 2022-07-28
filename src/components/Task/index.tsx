import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../theme';
import { CheckBox } from '../CheckBox';

interface Props{
  title: string;
  isCheck: boolean
}


export function Task({title, isCheck}:Props) {


  function handleIsCheck(){
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleTask}>{title}.</Text>
      <CheckBox
        toggleIsCheck={handleIsCheck}
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