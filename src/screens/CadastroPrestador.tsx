import React from 'react';
import { Text } from 'react-native';
import BackGround from '../components/BackGround';
import WhiteBox from '../components/WhiteBox';
import BtnComp from '../components/BtnComp';


export default function CadastroPrestador(props:any){
	const {navigation} = props;
	return(
		<BackGround>
			<WhiteBox>
				<Text>Cadastro Prestador</Text>
				<BtnComp labelButton="voltar menu" toPress={()=>navigation.navigate('Login')}/>
			</WhiteBox>
		</BackGround>
	);
}
