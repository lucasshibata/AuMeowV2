import React from 'react';
import { Text, Button } from 'react-native';
import BackGround from '../components/BackGround';
import WhiteBox from '../components/WhiteBox';


export default function CadastroPrestador(props:any){
	const {navigation} = props;
	return(
		<BackGround>
			<WhiteBox>
				<Text>Cadastro Prestador</Text>
				<Button title="home" onPress={navigation.navigate('Login')}/>
			</WhiteBox>
		</BackGround>
	);
}
