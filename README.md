# ListItem

# Step1: Tạo project bằng cách truy cập vào iterm
# Step2: Chọn ReactNative quăng folder vào enter
# Step3: Khởi tạo project ReactNative với 
```
expo init ListItem
```
# Step4: Chuyển qua GithubDesktop rồi up lên github. Ko xài thằng iterm để up vì sẽ lỗi
# Step5: Tạo folder component rồi khởi tạo 3 thằng Home.js,Login.js,Project.js
# Step6: Tạo folder StyleCSS rồi khởi tạo StyleCSS.js rồi export const styleCSS ra
![](2022-08-08-06-03-15.png)
# Step7: Vào file App.js tìm chỗ thuộc tính style.container và gõ lại styleCSS để nó tự import styleCSS vào
![](2022-08-08-06-05-20.png)
# Step8: Tải Navigation Environment từ các link highlight
# Step8.1 Tải các package mà ReactNative yêu cầu từ Native
```
npm install @react-navigation/native
```
Link: https://reactnavigation.org/docs/getting-started#:~:text=npm%20install%20%40react%2Dnavigation/native
# Step8.2 Tải các library hỗ trợ screens và safe area của ios thông qua lệnh

```
expo install react-native-screens react-native-safe-area-context
```
Link: https://reactnavigation.org/docs/getting-started#:~:text=expo%20install%20react%2Dnative%2Dscreens%20react%2Dnative%2Dsafe%2Darea%2Dcontext
# Step8.3 Chạy lệnh dưới để cài Stack Navigation
```
npm install @react-navigation/native-stack
```
Link: https://reactnavigation.org/docs/hello-react-navigation#:~:text=npm%20install%20%40react%2Dnavigation/native%2Dstack
# Step8.4 Cần import  NavigationContainer và createNavigationStackNavigator để sử dụng được. Rất quan trọng 
# Đây là bước sử lý đầu tiên ở trong file 


```
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
```
# Step8.5 Muốn xếp các Screen vào Stack của Navigation thì cần có các Screen. Đi khởi tạo screen
```
import { View,Text } from "react-native"
import styleCSS from "../StyleCSS/StyleCSS"

const Home = ()=>{
    return (
        <View style={styleCSS.container}>
            <Text>Home</Text>
        </View>
    )
}
export default Home
```
```
import { View,Text } from "react-native"
import styleCSS from "../StyleCSS/StyleCSS"

const Login = ()=>{
    return (
        <View style={styleCSS.container}>
            <Text>Login</Text>
        </View>
    )
}
export default Login
```
```
import { View,Text } from "react-native"
import styleCSS from "../StyleCSS/StyleCSS"

const Profile = ()=>{
    return (
        <View style={styleCSS.container}>
            <Text>Profile</Text>
        </View>
    )
}
export default Profile
```
![](2022-08-08-06-42-03.png)
