import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container:{
        flex:1,
        paddingTop: Constants.statusBarHeight - 10
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
    },
    headerText:{
        fontSize:15,
        color:'#737380'
    },
    headerTextBold:{
        fontWeight:'bold'
    },
    title:{
        fontSize: 30,
        color: '#13131a',
        fontWeight:'bold',
        marginTop:-15,
        paddingHorizontal:20,
    },
    description:{
        fontSize:16,
        color:'#737380',
        paddingHorizontal:20,
    },
    incidentList:{
        marginTop:20,
        paddingHorizontal:18,
    },
})
