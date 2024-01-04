"use client"

import { useState } from 'react';
import styles from './Form.module.scss';
import Button from '../Button/Button';

export default function Form() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const ticket = {
            name, email, body
        }

        const res = await fetch('', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(ticket)
        })
    }

  return (
    <section className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.formBox} id="contact">
            <label className={styles.nameBox}>
                <input 
                    required
                    type="text"
                    placeholder="Nombre *"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className={styles.name}
                />
            </label>
            <label className={styles.emailBox}>
                <input 
                    required
                    type="text"
                    placeholder="Email *"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={styles.email}
                />
            </label>
            <label className={styles.messageBox}>
                <textarea
                    required
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    id="body"
                    
                    className={styles.message}
                    >
                </textarea>
            </label>
            <div className={styles.button}>
                <Button
                    disabled={isLoading}
                    >
                        {isLoading && <span>Enviando...</span>}
                        {!isLoading && <span>Enviar</span>}
                </Button>
            </div>
        </form>
    </section>
  )
}
