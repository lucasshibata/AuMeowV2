import React, {Component} from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import WhiteBox from "./WhiteBox";

export default class Autenticacao extends Component{
    render(): React.ReactNode {
        const bgImg = require('../../assets/bg_img.png')
        return(
            <View style={styles.container}>
                <ImageBackground  source={bgImg} style={styles.imgBg}>
                    <WhiteBox/>
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
    }
})