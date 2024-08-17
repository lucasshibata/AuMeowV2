import React, {useState} from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import BackGround from "../components/BackGround";
import WhiteBox from "../components/WhiteBox";
import { CheckBox } from 'react-native-elements';
import BtnComp from "../components/BtnComp";


export default function Login({navigation}:any){
	const [email, onChangeEmail] = useState('')
	const [password, onChangePass] = useState('')
	const [check1, setCheck1] = useState(false);
	return(
		<BackGround>
			<WhiteBox>
				<Text>Entrar</Text>
				<Text>
					{check1}
				</Text>
				<TextInput placeholder="Email" style={styles.txtInput} onChangeText={email => onChangeEmail(email)}/>
				<View style={{height:10}}/>
				<TextInput placeholder="Senha"  style={styles.txtInput} secureTextEntry={true} onChangeText={password => onChangePass(password)}/>
				<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
					<CheckBox
						center
						title="Manter conectado"
						checked={check1}
						onPress={() => setCheck1(!check1)}
					/>
					<Text>Esqueci minha senha</Text>
				</View>
				<View style={{flexDirection:'row', justifyContent:'space-around'}}>
					<BtnComp labelButton="Cadastrar"/>
					<BtnComp labelButton="Entrar"/>
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
	},
	txtInput:{
		backgroundColor:'#EDEDED',
		width:258,
		borderRadius:15
	}
})