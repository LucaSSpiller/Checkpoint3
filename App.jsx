import React from 'react';
import {Router} from "./src/screens/routes"
import {ScreenStack} from './src/Contexts/Routes';
import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolator } from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Login } from "./src/Screens/Login";
import { Register } from "./src/Screens/Login/register";
import { Logoff} from "./src/Screens/Login/logoff";


const options = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolator.forHorizontalIOS,
  headerShown: false,
}

const Stack = createSharedElementStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions = {options}>
      <Stack.Screen name = "Routes" component = {Router}/>
      <Stack.Screen name = "Cadastro" component = {Register}/>
      <Stack.Screen name = "Login" component = {Login}/>
      <Stack.Screen name = "Logoff" component = {Logoff}/>
    </Stack.Navigator> 
  )
}

export default function App(){
return(
  <NavigationContainer>
    <Navigator screenOptions={options}>
    {
      ScreenStack.map((item, index)=>{
        <Screen
        key={index}
        name={item.route}
        component={item.component}
        option={{item:item}}
        />
      })
    }
    </Navigator>
  </NavigationContainer>
  )
}

