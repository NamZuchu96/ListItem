import { View,Text } from "react-native"
import styleCSS from "../StyleCSS/StyleCSS"

const Profile = ({navigation})=>{
    return (
        <View style={styleCSS.container}>
            <Text
            onPress={()=>navigation.popToTop()}
            >Profile</Text>
        </View>
    )
}
export default Profile