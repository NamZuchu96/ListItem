import { View,Text } from "react-native"
import styleCSS from "../StyleCSS/StyleCSS"

const Home = ({navigation})=>{
    return (
        <View style={styleCSS.container}>
            <Text 
            onPress={()=>navigation.navigate(`Login`)}
            >Home</Text>
        </View>
    )
}
export default Home