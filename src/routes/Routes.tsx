import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CreateUser from "../screens/CreateUser";
import CadastroDono from "../screens/CadastroDono";
import CadastroPrestador from "../screens/CadastroPrestador";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator()

export default ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name="CreateUser"
                    component={CreateUser}
                />
                <Stack.Screen
                    name="CadastroDono"
                    component={CadastroDono}
                />
                <Stack.Screen
                    name="CadastroPrestador"
                    component={CadastroPrestador}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}