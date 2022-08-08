import { View,Text } from "react-native"
import styleCSS from "../StyleCSS/StyleCSS"
import IconEntypo from 'react-native-vector-icons/Entypo'
const Login = ({navigation})=>{
    return (
        <View style={styleCSS.container}>

            <IconEntypo name="game-controller" size="50"></IconEntypo>
            <Text
            onPress={()=>navigation.navigate(`Home`)}
            >Login</Text>
        </View>
    )
}
export default Login