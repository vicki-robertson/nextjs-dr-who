"use client"

import styles from './ContactForm.module.scss';
import Button from '../../Button/Button';
import Form from 'react-bootstrap/Form';

export default function ContactForm() {
    
    const inputStyle = {
        backgroundColor: '#f0f0f0', // Change the background color
        color: '#333', // Change the text color
        borderColor: '#ccc', // Change the border color
      };

    return (
        <Form>
            <Form.Group className="mb-3" >
                <Form.Control type="name" id="name" placeholder="Nombre *" style={inputStyle} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email *" id="email" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={6} placeholder="Mensaje *" id="textArea" />
            </Form.Group>
            <Button type="submit">Enviar</Button>
        </Form>
      );
    }
