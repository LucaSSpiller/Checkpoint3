import { Stylesheet } from "react-native";

export const colors = {
    primary: '#ed145b',
    primaryDark: '#039a83',
    normal: '#b0e6fd',
    important: '#e892ab',
    icon1: '#ea7a72',
    icon2: '#f8c907',
    icon3: '#82a7c9',
    icon4: '#c2c5d1',
    light: '#f0f0f0',
    gray: '#91a3ad',
    darkGray: '#999999',
    dark: '#123',
    black: '#000',
    white: 'white',
    active: '#05294a99',
    sceneBg: '#04567f',
    screenBg: '#05294a',
    transparent: 'transparent'
   }
    
   export const constant = {
    SPACING: 16,
    borderRadius: 10,
    titleFontSize: 24,
    textFontSize: 16,
    subTextFontSize: 14,
    width: '100%',
    alignItems: 'center'
   }

   export const Style = Stylesheet.create({
    container:{
        flex:1,
        padding: constant.SPACING,
        backgroundColor: colors.white,
        alignItens: constant.alignItems,
        justifyContent: constant.alignItems
    },
    title:{
        fontSize: constant.titleFontSize,
        color: constant.active
    },
    error:{
    padding: constant.SPACING / 2,
    fontSize: constant.subTextFontSize,
    colors: colors.important
    },
    }
)