import { useContext } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-web";
import { stylesCSS } from "../../../App.component.styleCSS";
import AppContext from "../../context/AppContext";

const Home = ({ navigation }) => {
  return (
    <View style={stylesCSS.container}>
      <Text onPress={() => navigation.navigate(`Profile`)}>Home</Text>
    </View>
  );
};
export default Home;
