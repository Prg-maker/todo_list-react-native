import { StyleSheet } from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper'
import theme from '../../theme';
export const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems:'center',
    marginTop:getBottomSpace() + 125,
    marginHorizontal: 25
  },
  title:{
    fontFamily: theme.fonts.fontsBold,
    color: theme.colors.color_text,
    fontSize:20,
  },
  
  img:{
    marginBottom:25,
    marginTop:15
  },
  containerSubmit:{
    width: '100%',
    marginTop: 131
  },
  containerLink:{
    width: '100%',
    flexDirection:'row',
    justifyContent:'center',
    marginTop:25 ,
  },
  textLink:{
    fontFamily: theme.fonts.fontsMedium,

  },
  buttonLink:{
    color:theme.colors.color_link,
    fontFamily: theme.fonts.fontsMedium
  }
});