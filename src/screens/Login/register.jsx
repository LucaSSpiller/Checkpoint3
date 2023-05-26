import { Text, View } from "react-native";
import { Style } from "../../Contexts/Theme";
import { TextCustom } from '../../Components/TextInput'
import { ButtonCustom } from "../../Components/Button";
import { setData } from "../../Contexts/Data";
import { useState } from "react";
import { hasName, hasPass, hasEmail, hasPhone } from "../../Contexts/validForm";
import { maskPhone } from "../../Contexts/mask";

export const Register = ({ navigation }) => {
  const [error, setError] = useState('');
  const [form, setForm] = useState('');

  const CallBack = (key, value) => {
    var clone = Object.assign({}, form);
    clone[key] = value;
    setForm(clone);
  };

  const ValidateForm = () => {
    const { name, pass, email, phone } = form;
    
    if (!name || name.trim() === '' || hasName(name)) {
        setError('Preencha seu nome completo!');
        return false;
    }

    if (!pass || hasPass(pass)) {
        setError('A senha deve ter entre 6 e 8 dígitos');
        return false;
    }

    if (!email || hasEmail(email)) {
      setError('Digite um e-mail válido!');
      return false;
    }

    if (!phone || hasPhone(phone)) {
      setError('Digite um telefone válido! Ex: (xx)99999-9999');
      return false;
    }

    return true;
  };

  const Next = () => {
    var clone = Object.assign({}, form);
    clone.login = true;
    setData('user', clone);
    navigation.navigate('Home');
  };

  const onPress = () => {
    if (ValidateForm()) {
      Next();
    }
  };

  return (
    <View style={Style.container}>
      <Text style={Style.title}>Cadastre-se</Text>
      <TextCustom
        name='name'
        value={form.name}
        placeholder='Nome Completo'
        CallBack={CallBack}
      />
      <TextCustom
        name='pass'
        value={form.pass}
        placeholder='Senha'
        CallBack={CallBack}
      />
      <TextCustom
        name='email'
        value={form.email}
        placeholder='E-mail'
        CallBack={CallBack}
      />
      <TextCustom
        name='phone'
        value={form.phone}
        placeholder='Celular'
        CallBack={CallBack}
      />
      <Text style={Style.error}>{error}</Text>
      <ButtonCustom onPress={onPress} placeholder='Cadastrar' />
    </View>
  );
};
