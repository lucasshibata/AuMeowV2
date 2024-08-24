import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import BackGround from "../components/BackGround";
import WhiteBox from "../components/WhiteBox";
import RenderLogo from "../components/RenderLogo";
import TitleBusiness from "../components/TitleBusiness";
import Space from "../components/Space";
import { useForm, Controller} from "react-hook-form"
import BtnComp from "../components/BtnComp";


export default function CadastroDono(props:any){
	const {navigation} = props
	const { control, handleSubmit, formState:{errors}} = useForm({})

	// const [name, onChangeName] = useState('')
	// const [surname, onChangeSurname] = useState('')
	// const [email, onChangeEmail] = useState('')
	// const [password, onChangePassword] = useState('')
	// const [confirmPass, onChangeConfirmPass] = useState('')

	function handleSign(data:any){
		console.log(data)
	}
	return(
		<BackGround>
			<RenderLogo/>
			<TitleBusiness/>
			<WhiteBox>
				<Text>Encontre todos os serviços que seu Pet precisa</Text>
				<Space h={10}/>
				<View style={{flexDirection:'row', gap:10}}>
					<Controller
						control={control}
						name="userName"
						render={({field:{onChange, value}})=>(
							<TextInput 
								placeholder="Seu Nome:" 
								style={[styles.txtInput, {flex:1}]} 
								onChangeText={onChange}
								value={value}
							/>
						)}
					/>
					<Controller
						control={control}
						name="userSurname"
						render={({field:{onChange, value}})=>(
							<TextInput 
								placeholder="Seu Sobrenome:" 
								style={[styles.txtInput, {flex:1}]} 
								onChangeText={onChange}
								value={value}
							/>
						)}
					/>
				</View>
				<Space h={10}/>
				<Controller
					control={control}
					name="userEmail"
					render={({field:{onChange, value}})=>(
						<TextInput 
							placeholder="Email:" 
							style={styles.txtInput} 
							onChangeText={onChange}
							value={value}
						/>
					)}
				/>
				<Controller
					control={control}
					name="userPassword"
					render={({field:{onChange, value}})=>(
						<TextInput 
							placeholder="Senha:" 
							style={styles.txtInput} 
							onChangeText={onChange}
							value={value}
						/>
					)}
				/>
				<Controller
					control={control}
					name="userConfirmPass"
					render={({field:{onChange, value}})=>(
						<TextInput 
							placeholder="Confirme a senha:" 
							style={styles.txtInput} 
							onChangeText={onChange}
							value={value}
						/>
					)}
				/>
				<BtnComp labelButton='aperte' toPress={handleSubmit(handleSign)} bgColor={'blue'}/>
			</WhiteBox>
		</BackGround>
	)
}

const styles = StyleSheet.create({
	txtInput:{
		backgroundColor:'#EDEDED',
		width:"auto",
		borderRadius:15
	},
})