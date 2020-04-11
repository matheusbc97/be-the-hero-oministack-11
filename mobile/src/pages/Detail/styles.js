import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight-10,
        paddingHorizontal:20
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    contactBox:{
        padding:20,
        borderRadius:8,
        backgroundColor:'#FFF',
        marginBottom:16,
        elevation:2,
        marginHorizontal:2
    },
    heroTitle:{
        fontWeight: 'bold',
        fontSize:19,
        color:'#13131a',
        lineHeight:23
    },
    heroDescription:{
        fontSize:15,
        color:'#737380',
        marginTop:10
    },
    actions:{
        marginTop:8,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    action:{
        backgroundColor:'#e02041',
        borderRadius:6,
        elevation:3,
        height:45,
        width:'48%',
        justifyContent:'center',
        alignItems:'center'
    },
    actionText:{
        color:'#FFF',
        fontSize:15,
        fontWeight:'bold'
    }
})
