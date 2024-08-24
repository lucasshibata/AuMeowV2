import React from "react";
import { FlatList } from "react-native";
import BackGround from "../components/BackGround";
import NavToolsImg from "../components/NavToolsImg";
import RenderLogo from "../components/RenderLogo";
import Space from "../components/Space";

export default (props:any)=>{
    const {navigation} = props
    const data = [
        { titleNav: 'Serviços Pet', srcImg:require('../../assets/dog-walk.png'), navScreen:()=>navigation.navigate('PetServices') },
        { titleNav: 'Loja', srcImg:require('../../assets/shop-img.png'), navScreen:()=>navigation.navigate('Shopping') },
    ];

    function renderItem ({item}:any){
        return <NavToolsImg src={item.srcImg} titleNav={item.titleNav} onTouch={item.navScreen}/>
    }

    return(
        <BackGround>
            <Space h={20}/>
            <RenderLogo/>
            <Space h={10}/>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item=>item.titleNav}
                numColumns={2}
            />
        </BackGround>
    )
}