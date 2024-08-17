import React from "react";
import { Text } from "react-native";
import BackGround from "../components/BackGround";
import WhiteBox from "../components/WhiteBox";


export default function CadastroDono({navigation}:any){
	return(
		<BackGround>
			<WhiteBox>
				<Text>Cadastro Dono</Text>
			</WhiteBox>
		</BackGround>
	)
}