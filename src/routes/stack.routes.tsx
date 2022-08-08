import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { Login } from '../screens/Login'
import { Register } from '../screens/Register'
import { Tasks } from '../screens/Tasks'

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

      <Screen
        name="login"
        component={Login}
        
      />

      <Screen
        name="tasks"
        component={Tasks}
      />
    </Navigator>
  )
}