import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreateUser from '../screens/CreateUser';
import CadastroDono from '../screens/CadastroDono';
import CadastroPrestador from '../screens/CadastroPrestador';
import Login from '../screens/Login';
import RecoverPassword from '../screens/RecoverPassword';
import OAuth2Screen from '../screens/OAuth2Screen';
import NavigationScreen from '../screens/NavigationScreen';
import Shopping from '../screens/Shopping';
import PetServices from '../screens/PetServices';
import AuthProvider from '../contexts/AuthContext';
import EspecificProduct from '../screens/EspecificProduct';

const Stack = createNativeStackNavigator();

export default ()=>{
    return(
        <NavigationContainer>
            <AuthProvider>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen options={{headerShown:false}}
                        name="Login"
                        component={Login}
                    />
                    <Stack.Screen options={{headerTransparent:true, title:''}}
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
                        name="RecoverPassword"
                        component={RecoverPassword}
                    />
                    <Stack.Screen options={{headerTransparent:true, title:''}}
                        name="OAuth2Screen"
                        component={OAuth2Screen}
                    />
                    <Stack.Screen options={{headerTransparent:true, title:''}}
                        name="NavigationScreen"
                        component={NavigationScreen}
                    />
                    <Stack.Screen options={{headerTransparent:true, title:''}}
                        name="Shopping"
                        component={Shopping}
                    />
                    <Stack.Screen options={{headerTransparent:true, title:''}}
                        name="PetServices"
                        component={PetServices}
                    />
                    <Stack.Screen options={{headerTransparent:true, title:''}}
                        name="EspecificProduct"
                        component={EspecificProduct}
                    />
                </Stack.Navigator>
            </AuthProvider>
        </NavigationContainer>
    );
};
