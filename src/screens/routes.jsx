import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer"
import {ScreenArray} from "../Context/Routes/routes";

const {Navigator, Screen} = createDrawerNavigator()

export const Router = () =>{
    return(
        <NavigationContainer>
            <Navigator>
                {ScreenArray.map((item,i) => (
                 <Screen key={i} name={item.route} component={item.component}
                    options={{item: item,}}
                 />
                ))}
               
            </Navigator>
        </NavigationContainer>
    )
}