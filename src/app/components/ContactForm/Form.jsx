"use client"

import { useState } from 'react';
import styles from './Form.module.scss';
import { Toast } from 'react-bootstrap';
import SmallButton from '../Button/SmallButton';

export default function Form() {
    const [showToast, setShowToast] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleToastClose = () => setShowToast(false);

  // Change button label to 'sending...' based on state
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
      e.preventDefault()
      setIsLoading(true);
  
      //Show sent data in console log
      
      try {
        console.log('Datos enviados:', formData);
  
        await new Promise((resolve) => setTimeout(resolve, 1000));
  
        setShowToast(true);
  
        // Reset form after sending
        setFormData({ name: '', email: '', message: '' });
        setIsLoading(false);
      } catch (error) {
        console.error('Error al enviar datos:', error);
      }
    };

  return (
    <section className={styles.container}>

        <Toast position="bottom-center" show={showToast} onClose={handleToastClose} delay={5000} autohide style={{backgroundColor: '#FFC67E', color: '#040521', marginLeft: '2rem', marginTop: '3rem'}}>
            <Toast.Header>
                <img src="/logos/navbar-logo.png" className="rounded me-2" alt="Dr Who symbol" style={{height: '40px', width: '40px'}}></img>
                <h4 className="me-auto" style={{paddingLeft: '1rem'}}>Geronimo!</h4>
            </Toast.Header>
            <Toast.Body style={{fontStyle: 'italic'}}>
                <p style={{fontSize: '1.25rem'}}>Su mensaje ha sido enviado correctamente</p>
            </Toast.Body>
        </Toast>

        <form onSubmit={handleSubmit} className={styles.formBox} id="contact">
            <label className={styles.nameBox}>
                <input 
                    className={styles.name}
                    type="text"
                    name="name"
                    placeholder="Nombre *"
                    onChange={handleChange}
                    value={formData.name}
                    required
                />
            </label>
            <label className={styles.emailBox}>
                <input 
                    className={styles.email}
                    type="text"
                    name="email"
                    placeholder="Email *"
                    onChange={handleChange}
                    value={formData.email}
                    required
                />
            </label>
            <label className={styles.messageBox}>
                <textarea
                    className={styles.message}
                    name="message"
                    onChange={handleChange}
                    value={formData.message}
                    placeholder="Mensaje *"
                    required
                    >
                </textarea>
            </label>
            <div className={styles.button}>
                <SmallButton
                    disabled={isLoading}
                    >
                        {isLoading && <span>Enviando...</span>}
                        {!isLoading && <span>Enviar</span>}
                </SmallButton>
            </div>
        </form>
    </section>
  )
}
