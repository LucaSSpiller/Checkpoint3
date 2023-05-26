import { useState, useEffect } from "react"
import { Text, View, StatusBar } from "react-native"
import { setData, getData } from '../../Contexts/Data'
import { TextCustom } from '../../Components/TextInput'
import { Style } from "../../Contexts/Theme"
import { ButtonCustom } from "../../Components/Button"
import { hasName, hasPass } from "../../Contexts/validForm"

export const Login = ({ navigation }) => {
    const [error, setError] = useState('')
    const [form, setForm] = useState('')
    
    var user = {}
    useEffect(() => {
        const FindUser = (value) => {
            user = value
        }
        getData(FindUser, 'user')
    })

    const Validated = () => {
        const { user, pass } = form
       if (!user || user.trim() === '' || hasName) {
            setError('Preencha o campo usuário!')
            return false
        }

        if (!pass || hasPass) {
            setError('A senha deve ter entre 6 e 8 dígitos!')
            return false
        }

        return true
    }
 

    const Next = () => {
        user.login = true
        setData(user, 'user')
        navigation.navigate('Home')
    }


    const CallBack = (key, value) => {
        var clone = Object.assign({}, form)
        clone[key] = value
        setForm(clone)
    }

    const onPress = () => {
        (Validated())
            ? Next()
            : setError('Preencha o formulário corretamente!')
    }

    return (
        <View style={Style.container}>
            <Text style={Style.title}>Login</Text>
            <TextCustom
                name='user'
                CallBack={CallBack}
                value={form.user}
                placeholder='E-mail'
            />
            <TextCustom
                name='pass'
                CallBack={CallBack}
                value={form.pass}
                placeholder='Senha'
            />
            <Text style={Style.error}>{error}</Text>
            <ButtonCustom
                onPress={onPress}
                placeholder='Logar'
            />
            <StatusBar style="auto" />
        </View>
    );
}
