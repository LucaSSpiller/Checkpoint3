import { Text, View } from 'react-native';
import { useState } from 'react';
import { StylesForm } from '../css';

import { hasName, hasEmail, hasPass, hasPhone } from '../../context/validForm'

import { ModalError } from '../../components/Modal';
import { ButtonNext } from '../../components/Button';

import { TextCustom, TextPhone } from '../../components/TextInput';


export const ContactForm = props => {
    const setName = (value) => {
        CallBack('name', value)
    }
    const setEmail = (value) => {
        CallBack('email', value)
    }
    const setPass = (value) => {
        CallBack('pass', value)
    }
    const setPhone = (value) => {
        CallBack('phone', value)
    }
    const CallBack = (item, value) => {
        var clone = Object.assign({}, form);
        clone[item] = value
        SetForm(clone)
        hasCompletedTheMandatory()
    }
    const [form, SetForm] = useState({
        name: '',
        email: '',
        pass: '',
        phone: ''
    })
    const [msgError, setMsgError] = useState('');
    const [buttonDisable, setButtonDisable] = useState(true);
    const hasCompletedTheMandatory = () => {
        setButtonDisable((form.name && form.email && form.pass && form.phone) ? false : true)
    }
    const submit = () => {
        if (!hasName(form.name)) {
            setMsgError('Preencha o nome corretamente');
            return false
        }
        if (!hasEmail(form.email)) {
            setMsgError('Preencha o email corretamente');
            return false
        }
        if (!hasPass(form.pass)) {
            setMsgError('Preencha a senha corretamente');
            return false
        }
        if (!hasPhone(form.phone)) {
            setMsgError('Preencha o telefone corretamente');
            return false
        }
        next(props.completeForm, form)
    }
    function next ()  {
        var clone = object.assign({}, form)
        clone.login = true
        setData(clone, 'user')
        navigation.navigate("Routes")
    }
    return (
        <View style={StylesForm.container}>
            <ModalError
                setMsgError={setMsgError}
                msgError={msgError}
            />
            <TextCustom
                callBack={setName}
                item={form.name}
                maxLength={100}
                placeholder="Nome completo *"
            />
            <TextCustom
                callBack={setEmail}
                item={form.email}
                maxLength={100}
                placeholder="E-mail *"
                keyboardType="email-address"
            />
             <TextCustom
                callBack={setPass}
                item={form.pass}
                maxLength={8}
                placeholder="Senha *"
            />
            <TextPhone
                callBack={setPhone}
                item={form.phone}
                maxLength={15}
                placeholder="Telefone *"
                keyboardType="phone-pad"
            />
           
            <View style={StylesForm.viewText}>
                <Text style={StylesForm.label}>(*) Preencha todos os campos obrigatório</Text>
            </View>
            <ButtonNext
                onPress={submit}
                title="Continuar"
                disabled={buttonDisable}
            />
        </View>
    );
}