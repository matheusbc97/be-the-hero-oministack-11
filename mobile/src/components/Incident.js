import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'

const Incident = ({ showFooter=true, style, incident }) => {
    const navigation = useNavigation()

    const navigateToDetail = () => navigation.navigate('Detail', { incident })

    return (
        <View style={[styles.incident, style]}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name} de {incident.city}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={[styles.incidentValue, { marginBottom:0 }]}>
                {
                    Intl.NumberFormat('pt-BR', { style:'currency', currency:'BRL' }).format(incident.value)
                }
            </Text>

            {showFooter && (
                <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={navigateToDetail}
                >
                    <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                    <Feather
                        name="arrow-right"
                        size={16}
                        color="#E02041"
                    />
                </TouchableOpacity>
            )}
        </View>
    )
}

export default Incident

const styles = StyleSheet.create({
    incident: {
        padding:20,
        borderRadius:8,
        backgroundColor:'#FFF',
        marginBottom:16,
        elevation:2,
        marginHorizontal:2
    },
    incidentProperty: {
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold'
    },
    incidentValue:{
        marginTop:2,
        fontSize:15,
        marginBottom:12,
        color:'#737380'
    },
    detailsButton:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:12
    },
    detailsButtonText:{
        color:'#e02041',
        fontSize:15
    }
})
