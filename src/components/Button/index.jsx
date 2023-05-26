import { Pressable, Text, TouchableOpacity } from "react-native"
import { Style } from "../../Contexts/Theme"

export const ButtonCustom = (props) => {


    return (<TouchableOpacity actv onPress={props.onPress} style={Style.button}>
        <Text style={Style.textButton}>{props.placeholder}</Text>
    </TouchableOpacity>)
}