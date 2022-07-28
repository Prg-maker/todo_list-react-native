import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity , TouchableOpacityProps, Text} from 'react-native';
import theme from '../../theme';

import CheckImg from '../../assets/Check.svg'



interface PropsCheckBox{
  isCheck:boolean,
  toggleIsCheck: ()=> void
}

export function CheckBox({
  isCheck,
  toggleIsCheck
}:PropsCheckBox) {



  return (
    <TouchableOpacity style={styles.checkbox} onPress={toggleIsCheck} >
      {isCheck && <CheckImg/>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  checkbox:{
    width: 20,
    height: 20,
    borderWidth:2,
    borderColor:theme.colors.color_text,
    alignItems:'center',
    justifyContent:'center'
  },

})