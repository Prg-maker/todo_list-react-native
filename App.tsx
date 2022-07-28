import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import { AppLoading } from './src/components/AppLoading';
import { Home } from './src/screens/Home';

import {useFonts , Poppins_400Regular , Poppins_700Bold} from '@expo-google-fonts/poppins'
import { Routes } from './src/routes';
export default function App() {

  const [isLoadingFonts] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  })

  return (
    <>


      {!isLoadingFonts ? <AppLoading/> :<Routes/>}

      <StatusBar style="dark" />
    </>
  );
}
