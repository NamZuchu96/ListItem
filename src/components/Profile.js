import { View,Text } from "react-native"
import { stylesCSS } from "../../App.component.styleCSS"


const Profile = ({navigation})=>{
    return (
        <View style={stylesCSS.container}>
            <Text
            onPress={()=>navigation.popToTop()}
            >Profile</Text>
        </View>
    )
}
export default Profile