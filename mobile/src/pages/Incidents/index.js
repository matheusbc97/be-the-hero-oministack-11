import React, { useState, useEffect } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import api from '../../services/api'

import logoImg from '../../../assets/logo.png'

import styles from './styles'
import Incident from '../../components/Incident'

const Incidents = ({ navigation }) => {
    const [incidents, setIncidents] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    async function loadIncidents(){
        if(loading){
            return;
        }

        if(total > 0 && incidents.length == total){
            return;
        }

        setLoading(true)
        const response = await api.get(`incidents`, {
            params:{page}
        })

        setIncidents([
            ...incidents,
            ...response.data
        ])
        setTotal(response.headers['x-total-count'])
        setPage(page+1)
        setLoading(false)
    }

    useEffect(() => {
        loadIncidents()
    }, [])

    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.header}
            >
                <Image source={logoImg} style={{width:100}} resizeMode="contain"/>
                <Text>Total de <Text style={styles.headerTextBold}>{total} casos</Text></Text>
            </View>
            <Text style={styles.title}>Bem Vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.incidentList}
                data={incidents}
                keyExtractor={(item, index)=> item.id.toString()}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({item: incident})=> (
                    <Incident
                        incident={incident}
                    />
                )}
            />
        </View>
    )
}

export default Incidents
