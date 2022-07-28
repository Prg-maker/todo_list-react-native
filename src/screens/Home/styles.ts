import {StyleSheet} from 'react-native'
import theme from '../../theme'

export const styled = StyleSheet.create({
  container:{
    backgroundColor:theme.colors.color_background,
    height: '100%',
    width: '100%',
    alignItems:"center",
    paddingTop:'40%',
    paddingHorizontal:25
  },
  title:{
    fontFamily: theme.fonts.fontsBold,
    fontSize:20,
    marginTop: 28
  },
  subTitle:{
    fontFamily: theme.fonts.fontsMedium,
    marginTop: 19,
    paddingLeft:10,
    textAlign:'left',
    fontSize:18,
    marginBottom:64
  }
})