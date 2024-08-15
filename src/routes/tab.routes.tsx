import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import CreateUser from '../screens/CreateUser'
import Pagina from '../screens/Pagina'

const Tab = createBottomTabNavigator()

export default function TabRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name='createUser'
                component={CreateUser}
                options={
                    {tabBarIcon:({size})=><Icon name='home' size={size}/>}
                }
            />
            <Tab.Screen 
                name='Pagina'
                component={Pagina}
                options={
                    {tabBarIcon:({size})=><Icon name='plus' size={size}/>}
                }
            />
        </Tab.Navigator>
    )
}