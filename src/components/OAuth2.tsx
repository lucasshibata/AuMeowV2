import React from "react";
import { View } from "react-native";
import BtnComp from "./BtnComp";
import Icon from "react-native-vector-icons/FontAwesome5";

export default ({navigation}:any)=>{
    return(
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <BtnComp labelButton={<Icon name="apple" size={30} color="white"/>} onpress={()=>navigation.navigate('CreateUser')}/>
            <BtnComp labelButton={<Icon name="google" size={30} color="white"/>}/>
            <BtnComp labelButton={<Icon name="facebook" size={30} color="white"/>}/>
        </View>
    )
}