import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { Style } from "../Contexts/Theme";
import { getData } from "../Contexts/Data";
import { ButtonCustom } from "../Components/Button";


export function Home ({navigation}) {
  useEffect(() => {
      function handleStatusChange(data){
        if (!data){
          navigation.navigate('Cadastro')
          return true
        }
        if(!data.login){
          console.log(data)
          navigation.navigate('Login')
          return true
        }
      }
      getData(handleStatusChange, 'user')
    }
  )
  function onPress ()  {
    navigation.navigate('Logoff')
  }

return (
    <View style={Style.container}>
      <Text style={Style.title}>Open up App.js to s2tart working on yout app!</Text>
      <ButtonCustom
        onPress={onPress}
        placeHolder='logoff'
        />
      <StatusBar style="auto" />
    </View>
  );
}
