import React, {useState} from "react";
import { Text, StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import BackGround from "../components/BackGround";
import WhiteBox from "../components/WhiteBox";
import { CheckBox } from 'react-native-elements';
import BtnComp from "../components/BtnComp";
import OAuth2 from "../components/OAuth2";
import Space from "../components/Space";
import RenderLogo from "../components/RenderLogo";


export default function Login(props:any){
	const {navigation} = props
	const [email, onChangeEmail] = useState('')
	const [password, onChangePass] = useState('')
	const [check1, setCheck1] = useState(false);
	
	return(
		<BackGround>
			<RenderLogo/>
			<Text style={styles.nameEnterprise}>AuMeow</Text>
			<Space h={10}/>
			<WhiteBox>
				<Text style={styles.title}>Entrar</Text>
				<TextInput 
					placeholder="Email" 
					style={styles.txtInput} 
					onChangeText={email => onChangeEmail(email)}
				/>
				<Space h={10}/>
				<TextInput 
					placeholder="Senha"  
					style={styles.txtInput} 
					secureTextEntry={true} 
					onChangeText={password => onChangePass(password)}
				/>
				<Space h={10}/>
				<View style={{flexDirection:'row', alignItems:'center'}}>
					<View style={{flexDirection:'row',alignItems:'center'}}>
						<CheckBox
							center
							checked={check1}
							onPress={() => setCheck1(!check1)}
							containerStyle={{padding:0}}
						/>
						<Text style={styles.txt}>Manter Conectado</Text>
					</View>
					<Space w={10}/>
					<TouchableOpacity onPress={()=>navigation.navigate('RecoverPassword')}>
						<Text style={styles.txtRecover}>Esqueci minha senha</Text>
					</TouchableOpacity>
				</View>
				<Space h={10}/>
				<View style={{flexDirection:'row', justifyContent:'space-around'}}>
					<BtnComp labelButton="Cadastrar" toPress={()=>navigation.navigate('CreateUser')}/>
					<BtnComp labelButton="Entrar" toPress={()=>navigation.navigate('NavigationScreen')}/>
				</View>
				<View style={{height:10}}/>
				<Text style={styles.txt}>Ou entre com outra conta:</Text>
				<View style={{height:10}}/>
				<OAuth2 rotaNav={()=>navigation.navigate('OAuth2Screen')}/>
			</WhiteBox>
		</BackGround>
	)
}

const styles = StyleSheet.create({
	nameEnterprise:{
		fontSize:32,
		color:'white'
	},
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
		width:"auto",
		borderRadius:15
	},
	txtRecover:{
		textDecorationLine:'underline',
		color:'blue'
	}
})