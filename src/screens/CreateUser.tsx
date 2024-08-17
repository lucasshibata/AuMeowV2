import React from "react";
import { Button } from "react-native";
import BackGround from "../components/BackGround"
import WhiteBox from "../components/WhiteBox";


export default function CreateUser({navigation}:any){
	return(
		<BackGround>
			<WhiteBox>
				<Button
					title="proxima pagina"
					onPress={()=>navigation.navigate('Pagina')}			
				/>
			</WhiteBox>
		</BackGround>
	)
}