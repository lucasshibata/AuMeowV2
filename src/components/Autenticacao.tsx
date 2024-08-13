import React, {Component} from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";

export default class Autenticacao extends Component{
    render(): React.ReactNode {
        const bgImg = require('../../assets/bg_img.png')
        return(
            <View style={styles.container}>
                <ImageBackground  source={bgImg} style={styles.imgBg}>
                    <View style={styles.cetralSqr}>
                        <Text>Olá</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imgBg:{
        width:'100%', 
        height:'100%',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    cetralSqr:{
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