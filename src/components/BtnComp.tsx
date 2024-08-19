import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";


export default ({labelButton, onpress}:any)=>{
    return(
        <TouchableOpacity style={styles.btn_st} onPress={onpress} >
            <Text style={styles.btn_txt}>{labelButton}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn_st:{
		backgroundColor:'#7360DF',
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        borderRadius:10,
        paddingHorizontal:20
    },
    btn_txt:{
        fontSize:15,
        color: 'white',
        fontWeight:'bold'
    }
})