import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { Register } from '../screens/Register'

const {Navigator , Screen} = createNativeStackNavigator()

export function StackRoutes(){
  return(
    <Navigator
      screenOptions={{headerShown:false}}
      initialRouteName={'Home'}
    >
      <Screen
        name="home"
        component={Home}
      />
       <Screen
        name="register"
        component={Register}
      />
    </Navigator>
  )
}