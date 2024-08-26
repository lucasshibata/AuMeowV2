import React, {useState} from "react";
import { Text, StyleSheet, TextInput, View, TouchableOpacity, Alert } from "react-native";
import BackGround from "../components/BackGround";
import WhiteBox from "../components/WhiteBox";
import { CheckBox } from 'react-native-elements';
import BtnComp from "../components/BtnComp";
import OAuth2 from "../components/OAuth2";
import Space from "../components/Space";
import RenderLogo from "../components/RenderLogo";
import TitleBusiness from "../components/TitleBusiness";
import { useForm, Controller} from "react-hook-form"
import Auth from '@react-native-firebase/auth'


export default function Login(props:any){
	const {navigation} = props
	const {control, handleSubmit, formState:{errors}} = useForm({})
	const [check1, setCheck1] = useState(false)
	
	function signIn(data:any){
		Auth().signInWithEmailAndPassword(data.loginEmail, data.loginPassword).then(()=>{
			console.log('login com sucesso')
			navigation.navigate('NavigationScreen')
		})
		.catch(error=>{
			if(error.code === 'auth/email-already-in-use'){
				console.log('email já existe')
				Alert.alert("email já existe")
			}
			if(error.code === 'auth/invalid-email'){
				console.log('email inválido')
				Alert.alert("email inválido")
			}
		})
	}
	return(
		<BackGround>
			<RenderLogo/>
			<TitleBusiness/>
			<Space h={10}/>
			<WhiteBox>
				<Text style={styles.title}>Entrar</Text>
				<Controller
					control={control}
					name="loginEmail"
					render={({field:{onChange, value}})=>(
						<TextInput 
							placeholder="Email" 
							style={styles.txtInput} 
							onChangeText={onChange}
							value={value}
						/>
					)}
				/>
				<Space h={10}/>
				<Controller
					control={control}
					name="loginPassword"
					render={({field:{onChange, value}})=>(
						<TextInput 
							placeholder="Senha" 
							style={styles.txtInput} 
							onChangeText={onChange}
							value={value}
							secureTextEntry={true} 
						/>
					)}
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
					<BtnComp labelButton="Entrar" toPress={handleSubmit(signIn)}/>
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