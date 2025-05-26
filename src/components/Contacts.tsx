import React, { useState } from 'react'
import styles from './Contacts.module.css'
import { FaEnvelope, FaWhatsapp, FaPaperPlane } from 'react-icons/fa'

function Contacts() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

  return (
    <div className={styles.container}>
        <div className={styles.fast_info}>
            <h1 className={styles.title}>Entre em Contato</h1>
            <p>Que tal trabalharmos juntos em algo incrível? Estou sempre aberto a novas oportunidades ou parcerias em projetos inovadores. Preencha o formulário abaixo, ou escolha a opçao de contato abaixo, e entrarei em contato com você o mais breve possível! 📨</p>
            <div className={styles.button_cont}>
                <a className={styles.fast_buttons} href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTFRMlrPhQpBGxzqCxMBbnbWzwKsfFWFQqtGtrvwBPkGZtBKgVjrgDcScSVGsznSvPgFdD">
                    <p><FaEnvelope /> Email</p>
                    <p className={styles.span}>edson.gentil.junior@gmail.com</p>
                </a>
                <a className={styles.fast_buttons} href="https://wa.me/5535992527472">
                    <p><FaWhatsapp /> Whatsapp</p>
                    <p className={styles.span}>+55 (35) 9 9252-7472</p>
                </a>
            </div>
        </div>
        <form>
            <label>
                <span>Nome: </span>
                <input type="text" placeholder='digite seu nome' value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                <span>Email: </span>
                <input type="email" placeholder='Ex: seu@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                <span>Mensagem: </span>
                <textarea value={message} placeholder='sobre o que quer falar' onChange={(e) => setMessage(e.target.value)}></textarea>
            </label>
            <button className='primary'>Enviar <FaPaperPlane /></button>
        </form>
    </div>
  )
}

export default Contacts