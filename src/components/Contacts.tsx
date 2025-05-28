import React, { useState } from 'react'
import styles from './Contacts.module.css'
import { FaEnvelope, FaWhatsapp, FaPaperPlane } from 'react-icons/fa'


function Contacts() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [alerta, setAlerta] = useState('')


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!name || !email ){
            setAlerta('Preencha todos os campos')
            return
        }

        try{
            const response = await fetch("https://formspree.io/f/xvggealk", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }, 
                body: JSON.stringify({name, email, message})
            })

            if(response.ok){
                setName('')
                setEmail('')
                setMessage('')
                setAlerta('Enviado com sucesso!')
            }
        } catch ( error: any ){
            setAlerta(error)
            console.error(error)
        }
    }

  return (
    <div className={styles.container}>
        <div className={styles.fast_info}>
            <h1 className={styles.title}>Entre em Contato</h1>
            <p>Que tal trabalharmos juntos em algo incrível? Estou sempre aberto a novas oportunidades ou parcerias em projetos inovadores. Preencha o formulário abaixo, ou escolha a opçao de contato abaixo, e entrarei em contato com você o mais breve possível! 📨</p>
            <div className={styles.button_cont}>
                <a className={styles.fast_buttons} href="mailto:edson.gentil.junior@gmail.com" target='_blank'  rel='noopener noreferrer'>
                    <p><FaEnvelope /> Email</p>
                    <p className={styles.span}>edson.gentil.junior@gmail.com</p>
                </a>
                <a className={styles.fast_buttons} href="https://wa.me/5535992527472" target='_blank' rel='noopener noreferrer'>
                    <p><FaWhatsapp /> Whatsapp</p>
                    <p className={styles.span}>+55 (35) 9 9252-7472</p>
                </a>
            </div>
        </div>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome: </span>
                <input type="text" placeholder='digite seu nome' value={name} onChange={(e) => setName(e.target.value)} required/>
            </label>
            <label>
                <span>Email: </span>
                <input type="email" placeholder='Ex: seu@email.com' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </label>
            <label>
                <span>Mensagem: </span>
                <textarea value={message} placeholder='sobre o que quer falar' onChange={(e) => setMessage(e.target.value)}></textarea>
            </label>
            {alerta ? <p className={styles.alert}>{alerta}</p> : null}
            <button className='primary'>Enviar <FaPaperPlane /></button>
        </form>
    </div>
  )
}

export default Contacts