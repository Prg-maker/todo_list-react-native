import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  header:{
    height: '35%',
    backgroundColor:theme.colors.color_button,
    justifyContent:'center',
    alignItems:'center',
  },
  avatar:{
    width: 115,
    height:115,
    borderRadius:100,
    marginTop:80
  },
  name:{
    fontFamily:theme.fonts.fontsBold,
    color: theme.colors.color_background,
    fontSize:22,
    marginVertical:10
  }
});