import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CreateUser from "../screens/CreateUser";
import CadastroDono from "../screens/CadastroDono";
import CadastroPrestador from "../screens/CadastroPrestador";
import Login from "../screens/Login";
import RecoverPassword from "../screens/RecoverPassword";

const Stack = createNativeStackNavigator()

export default ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown:false}}
                    name="CreateUser"
                    component={CreateUser}
                />
                <Stack.Screen options={{headerTransparent:true, title:''}}
                    name="CadastroDono"
                    component={CadastroDono}
                />
                <Stack.Screen options={{headerTransparent:true, title:''}}
                    name="CadastroPrestador"
                    component={CadastroPrestador}
                />
                <Stack.Screen options={{headerTransparent:true, title:''}}
                    name="Login"
                    component={Login}
                />
                <Stack.Screen options={{headerTransparent:true, title:''}}
                    name="RecoverPassword"
                    component={RecoverPassword}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}