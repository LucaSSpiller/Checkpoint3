import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Style } from '../../Contexts/Theme';
import { TextCustom } from '../../Components/TextInput';
import { ButtonCustom } from '../../Components/Button';
import { setData } from '../../Contexts/Data';
import  { useState } from 'react';

export function Register ({navigation})  {
    const [error, setError] = useState('')
    const [form, setForm]  = useState({})

    function Validate () {
        //Validar registros no banco de dados com os dados q eu criei  (1 ponto)
        // da pra criar um novo arquivo e chamar as validações pra dentro daqui importando elas, ou validando por aqui 
        return (form.user && form.pass && form.email && form.phone) ? true : false
    }
    function next ()  {
        var clone = object.assign({}, form)
        clone.login = true
        setData(clone, 'user')
        navigation.navigate("Routes")
    }
    function onPress ()  {
        (Validate()) ?
            next(form) :
            setError("Cadastro inválido")
    }
    function CallBack (key, data) {
        var clone = Object.assign({}, form);
        clone[key] = data
        setForm(clone)
    }

    return(
        <View style={Style.container}>
            <Text style={Style.title}>Login</Text>
            <TextCustom
                name="user"
                CallBack={CallBack}
                value={form.name}
                placeholder="Nome"/>
            <TextCustom
                name="pass"
                CallBack={CallBack}
                value={form.pass}
                placeholder="Senha"/>
            <TextCustom
                name="email"
                CallBack={CallBack}
                value={form.email}
                placeholder="E-mail"/>
            <TextCustom
                name="phone"
                CallBack={CallBack}
                value={form.phone}
                placeholder="Celular"/>
            <Text style={Style.error}>{error}</Text>
            <ButtonCustom
                onPress={onPress}
                placeholder="Cadastrar"
            />
            <StatusBar style="auto"/>
        </View>

    );
} 