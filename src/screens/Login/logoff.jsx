import { useEffect } from "react"
import { Text, View } from "react-native"
import { setData, getData } from '../../Contexts/Data'
import { Style } from "../../Contexts/Theme"

export const Logoff = ({ navigation }) => {

    const CallBack = (user) => {
        user.login = false
        setData('user', user)
        navigation.navigate('Login')
    }
    const Next = () => {
        getData(CallBack, 'user')
    }
    useEffect(() => {
        setTimeout(Next, 4000);
    })

    return (<View style={Style.container}>
        <Text style={Style.title}>Até Breve</Text>
    </View>)
}
