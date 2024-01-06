import React from 'react'
import DoctorsCard from '../components/DoctorsCard/DoctorsCard';
import styles from './page.module.scss'


export default function DoctorsPage() {
  return (
    <div>
      <h3 className={styles.title}>Doctores</h3>
      <DoctorsCard />
    </div>
  )
}
