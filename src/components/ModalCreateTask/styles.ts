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
    backgroundColor:theme.colors.color_background,
    paddingHorizontal:35,
    paddingTop:19
  },
  titleName:{
    fontFamily:theme.fonts.fontsMedium,
    fontSize: 18,
    marginVertical:50
  }
});