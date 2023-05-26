import { TextInput, View } from "react-native"
import { Style } from "../../Contexts/Theme"

export const TextCustom = (props) => {

    const onChangeText = (e) => {
        props.CallBack(props.name, e)
    }

    return (
    <View style={Style.row}>
        <TextInput
            onChangeText={onChangeText}
            value={props.value}
            placeholder={props.placeholder}
            style={Style.TextInput}
        />
    </View>)
}

export const TextPhone = (props) => {
    const CallBack = (e) => {
        props.callBack(maskPhone(props.item, e))
    }
    return (
        <TextInputCustom {...props} CallBack={CallBack} />
    );
}