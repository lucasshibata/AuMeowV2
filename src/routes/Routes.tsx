import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CreateUser from "../screens/CreateUser";
import Pagina from "../screens/Pagina";

const Stack = createNativeStackNavigator()

export default ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="CreateUser"
                    component={CreateUser}
                />
                <Stack.Screen
                    name="Pagina"
                    component={Pagina}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}