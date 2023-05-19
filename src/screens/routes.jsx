import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer"
import {ScreenArray} from "../Contexts/Routes/routes";

const {Navigator, Screen} = createDrawerNavigator()

export function Routes () {
    return(
            <Navigator>
                {
                ScreenArray.map((item,index) => (
                    <Screen 
                        key={index} 
                        name={item.route} 
                        component={item.component}
                        options={{item: item,}}
                    />
                ))
            }
            </Navigator>

    )
}