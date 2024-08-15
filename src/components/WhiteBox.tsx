import React from "react"
import { Text, View, StyleSheet } from "react-native"

export default ()=>{
    return(
        <View style={styles.centralSqr}>
            <Text>Olá</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    centralSqr:{
        backgroundColor:'white',
        width:'70%',
        height:'40%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        shadowRadius:20,
        shadowColor:'#000',
        shadowOpacity:1,
        alignSelf:'center',
        shadowOffset: { width: 20, height: 20, }
    }
})