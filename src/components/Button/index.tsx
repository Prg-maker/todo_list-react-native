import {Text, TouchableOpacity , TouchableOpacityProps , StyleSheet, ActivityIndicator} from 'react-native'
import theme from '../../theme'


type Props = TouchableOpacityProps & {
  title:string,
  isLoading?: boolean
}

export function Button({title , isLoading = true , ...rest}:Props){
  return(
    <TouchableOpacity
      style={styled.button}
      {...rest}
    >
      {
        !isLoading ? 
        
        <ActivityIndicator
          size={32}
        />
        :
        
        <Text style={styled.title}>
          {title}
        </Text>
      }
    </TouchableOpacity>
  )
}


const styled = StyleSheet.create({
  button:{
    backgroundColor:theme.colors.color_button,
    width: '100%',
    height: 60,
    alignItems:"center",
    justifyContent:'center',
    borderRadius:10
  },
  title:{
    fontFamily:theme.fonts.fontsBold,
    fontSize:18
  }
})