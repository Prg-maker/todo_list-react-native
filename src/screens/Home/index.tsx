import { Text, View } from "react-native";
import {styled} from './styles'
import StudentImg from "../../assets/student.svg";
import { Button } from "../../components/Button";
import { useState } from "react";
import {useNavigation} from '@react-navigation/native'

export function Home() {

  const [isLoading , setIsLoading] = useState(true)
  const navigation = useNavigation()

  function handleToggleIsLoadingTest(){
    setIsLoading(false)
    navigation.navigate('register')
  }

  return (
    <View style={styled.container}>
      <StudentImg />
      <Text style={styled.title}>Get things done with TODO</Text>
      <Text style={styled.subTitle}>
        In your daily, day to day life we {'\n'}
        often lose track of time and{'\n'}
        forget to do the things that{'\n'}
        needs to be done.
      </Text>

      <Button
        title="Get Started"
        onPress={handleToggleIsLoadingTest}
        isLoading={isLoading}
      />

    </View>
  );
}