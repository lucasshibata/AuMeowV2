import React from "react";
import { Text } from "react-native";
import BackGround from "../components/BackGround";
import WhiteBox from "../components/WhiteBox";


export default function CadastroPrestador({navigation}:any){
	return(
		<BackGround>
			<WhiteBox>
				<Text>Cadastro Prestador</Text>
			</WhiteBox>
		</BackGround>
	)
}