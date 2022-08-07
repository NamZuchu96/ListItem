import { View,Text } from "react-native"
import styleCSS from "../StyleCSS/StyleCSS"

const Login = ({navigation})=>{
    return (
        <View style={styleCSS.container}>
            <Text
            onPress={()=>navigation.navigate(`Profile`)}
            >Login</Text>
        </View>
    )
}
export default Login