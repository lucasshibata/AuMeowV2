import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import BackGround from "../components/BackGround"
import WhiteBox from "../components/WhiteBox";


export default function CreateUser({navigation}:any){
	return(
		<BackGround>
			<WhiteBox>
				<Text style={styles.title}>Bem-vindo ao AuMeow!</Text>
				<Text style={styles.txt}>Escolha uma opção para se cadastrar</Text>
				<View style={{flexDirection:'row', gap:10}}>
					<View style={{borderRadius:15}}>
						<Button
							title="Dono de Pet"
							onPress={()=>navigation.navigate('CadastroDono')}
							color={"#7360DF"}
						/>
					</View>
					
					<Button
						title="Prestador de Serviços"
						onPress={()=>navigation.navigate('CadastroPrestador')}	
						color={"#7360DF"}

					/>
				</View>
				<Text style={styles.txt}>Caso já tenha uma conta, clique aqui</Text>
				<View style={{justifyContent:'flex-start', backgroundColor: 'black'}}>
					<Button
						title="Entrar"
						onPress={()=>navigation.navigate('Login')}
						color={"#7360DF"}	
					/>
				</View>
			</WhiteBox>
		</BackGround>
	)
}

const styles = StyleSheet.create({
	title:{
		fontSize:20,
		color:'#7360DF'
	},
	txt:{
		fontSize:15,
		color:'#7360DF'
	},
	btns:{
		width:50
	}
})