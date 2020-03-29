import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

export default function Profile({ history }) {
    const [incidents, setIncidents] = useState([])

    const ongId = localStorage.ongId;
    const ongName = localStorage.getItem('ongName')

    useEffect(() => {
        api.get('profile', {
            headers:{
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data)
        })
        
    }, [ongId])

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`, {
                headers:{
                    Authorization: ongId
                }
            })

            setIncidents(incidents.filter(item => item.id !== id))
        }catch(err){
            alert('Erro ao deletar caso, tente novamente')
        }
    }

    function handleLogout(){
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(item => (
                    <li key={item.id}>
                        <strong>Caso:</strong>
                        <p>{item.type}</p>

                        <strong>Descrição:</strong>
                        <p>{item.description}</p>

                        <strong>Valor:</strong>
                        <p>{
                            Intl.NumberFormat('pt-BR', { 
                                style:'currency', 
                                currency:'brl' 
                            }).format(item.value)
                        }</p>
                        
                        <button type="button" onClick={()=>handleDeleteIncident(item.id)}>
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}
        

            </ul>
            
        </div>
    )
}
