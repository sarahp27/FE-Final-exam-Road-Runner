import React from 'react'
import styles from './Navbar.module.css'
import { Link, Route, useNavigate } from 'react-router-dom'
import logo from './logo.png'

export default function Navbar() {
  // const nav = useNavigate();

  // const handleNavigate=()=>{
  //   nav('/');

  // }
  return (
    <>
      <div className={styles.navbar}>
        <img alt="Road Runner Logo" src={logo} width="140px" height="90px" />
        <div>
        {/* <img src="https://themewagon.github.io/carbook/images/bg_1.jpg" alt="" /> */}
        </div>

       
      </div>

    </>
  )
}
