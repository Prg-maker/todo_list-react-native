import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    height: '65%',
    width: '100%',
    position: 'absolute',
    bottom:0,
    paddingTop: 14,
    paddingHorizontal:14,
    backgroundColor:'#F8F8F8'
  },
  title:{
    fontFamily: theme.fonts.fontsBold,
    fontSize:20,
    opacity: .8,
  },
  contentTask:{
    flex: 1,
    borderTopLeftRadius:13,
    borderTopRightRadius:13,
    backgroundColor:theme.colors.color_background
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:28,
    paddingRight:18,
    paddingTop:19
  },
  subTitle:{
    fontFamily:theme.fonts.fontsBold,
    fontSize:18,
    opacity: .7,

  },
  containerTask:{
    marginTop:45,
    marginLeft:26,
    marginRight:42
  },
  containerMessageOption:{
    alignItems:'center',
    marginTop:20
  },
  messageOption:{
    fontFamily:theme.fonts.fontsBold,
    fontSize:20,
    paddingBottom:20
  }
});