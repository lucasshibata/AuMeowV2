import {createNativeStackNavigator} from '@react-navigation/native-stack'

import CreateUser from '../screens/CreateUser'
import Pagina from '../screens/Pagina'

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='createUser'
                component={CreateUser}
                
            />
            <Stack.Screen 
                name='Pagina'
                component={Pagina}
                
            />
        </Stack.Navigator>
    )
}