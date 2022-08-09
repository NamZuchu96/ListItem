import { View, Text } from "react-native";
import TextBox from "react-native-password-eye";
import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { stylesCSS } from "../../../App.component.styleCSS";
import styleCSS from "./styleCss";
import {
  isValidEmailForm,
  isValidPasswordForm,
} from "../../ultities/Validation";
const Login = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  return (
    <View style={stylesCSS.container}>
      {/* <IconEntypo name="game-controller" size="50"></IconEntypo> */}
      <TextBox
        style={styleCSS.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Enter email"
      />
      <TextBox
        style={styleCSS.input}
        onChangeText={(text) => {
          setPassword(text);
        }}
        secureTextEntry="true"
        value={password}
        placeholder="Enter password"
      />
      <Text
        style={styleCSS.login}
        onPress={() => {
          if (email.length == 0 || password.length == 0) {
            return alert(`Vui lòng điền đầy đủ thông tin`);
          }
          if (isValidEmailForm(email) == false) {
            return alert(`Vui lòng điền đúng dạng email`);
          }

          if (isValidPasswordForm(password) == false) {
            return alert(
              "Vui lòng nhập đúng định dạng có số,kí tự đặc biệt,chữ cái in hoa và từ 6->20 kí tự"
            );
          } else {
            navigation.navigate(`Home`);
          }
        }}
      >
        Login
      </Text>
      {/* //   onPress={() => alert(`${username} \n ${password}`)}>Login</Text> */}
    </View>
  );
};
export default Login;
