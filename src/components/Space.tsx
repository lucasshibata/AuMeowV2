import { View } from "react-native"

export default (props:any)=>{
    const {h, w} = props
    return(
        <View style={{height:h||0, width:w||0, backgroundColor:'black'}}/>
    )
}