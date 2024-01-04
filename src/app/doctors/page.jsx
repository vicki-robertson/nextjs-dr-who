import React from 'react'
import DoctorsCard from '../components/DoctorsCard/DoctorsCard'
import styles from './page.module.scss'

export default function DoctorsPage() {
  return (
    <div>
      <h2 className={styles.title}>Doctores</h2>
        <DoctorsCard />
    </div>
  )
}
