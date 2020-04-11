import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'
import * as MailComposer from 'expo-mail-composer'

import logoImg from '../../../assets/logo.png'
import Incident from '../../components/Incident'
import styles from './styles'

const Detail = ({ navigation, route }) => {
    const { incident } = route.params
    const message = `Olá ${incident.name}. APa estou espenradoasjosadnn asjklndaslkjnkjsdn`

    function sendEmail(){
        MailComposer.composeAsync({
            subject:`Herói do caso: ${incident.title}`,
            recipients:[incident.email],
            body:message
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)    }

    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.header}
            >
                <Image source={logoImg} style={{width:100}} resizeMode="contain"/>
                <TouchableOpacity
                    onPress={()=>navigation.pop()}
                >
                    <Feather
                        name="arrow-left"
                        size={28}
                        color="#E02041"
                    />
                </TouchableOpacity>
            </View>
            <Incident
                incident={incident}
                showFooter={false}
            />
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View
                    style={styles.actions}
                >
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
        	            <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
        	            <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Detail
