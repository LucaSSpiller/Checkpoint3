import { Image, View } from "react-native"
import { Style } from "../../Contexts/Theme"

export const ImageCustom = ({ img }) => {
    return (
        <View >
            <Image
            style={Style.img}
            source={img}
            />
        </View>
    )
}