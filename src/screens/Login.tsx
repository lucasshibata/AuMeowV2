import React from "react";
import { Text } from "react-native";
import BackGround from "../components/BackGround";
import WhiteBox from "../components/WhiteBox";


export default function Login({navigation}:any){
	return(
		<BackGround>
			<WhiteBox>
				<Text>Login</Text>
			</WhiteBox>
		</BackGround>
	)
}