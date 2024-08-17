import React from "react";
import { Text, View, StyleSheet } from "react-native";
import BackGround from "../components/BackGround"
import WhiteBox from "../components/WhiteBox";
import BtnComp from "../components/BtnComp";
import RenderLogo from "../components/RenderLogo";


export default function CreateUser({navigation}:any){
	return(
		<BackGround>
			<RenderLogo/>
			<View style={{height:10}}/>
			<WhiteBox>
				<Text style={styles.title}>Bem-vindo ao AuMeow!</Text>
				<View style={{height:10}}/>
				<Text style={styles.txt}>Escolha uma opção para se cadastrar:</Text>
				<View style={{height:5}}/>
				<View style={{flexDirection:'row', gap:10}}>
					<BtnComp
						labelButton="Dono de Pet"
						onpress={()=>navigation.navigate('CadastroDono')}
					/>
					<BtnComp
						labelButton="Prestador de Serviços"
						onpress={()=>navigation.navigate('CadastroPrestador')}	
					/>
				</View>
				<View style={{height:10}}/>
				<Text style={styles.txt}>Caso já tenha uma conta, clique aqui:</Text>
				<View style={{height:5}}/>
				<View style={{flexDirection:'row'}}>
					<BtnComp
						labelButton="Entrar"
						onpress={()=>navigation.navigate('Login')}	
					/>
				</View>
			</WhiteBox>
		</BackGround>
	)
}

const styles = StyleSheet.create({
	title:{
		fontSize:28,
		color:'#7360DF'
	},
	txt:{
		fontSize:16,
		color:'#7360DF'
	}
})