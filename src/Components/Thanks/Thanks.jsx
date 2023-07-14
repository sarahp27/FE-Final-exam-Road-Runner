import React from 'react'
import thanks from './thanks.gif'
import styles from './Thanks.module.css'
import { useNavigate } from 'react-router-dom'

export const Thanks = () => {

    const nav = useNavigate();


    const handleNavigate=()=>{
        nav('/');
    }

  return (
    <>
    <div>
    <img src={thanks} alt="Thank You " width="800px" height="600"/>
    <div  className={styles.thanks}  >

        
    
     <h1 style={{display:"flex",flexDirection: "column", alignItems:"center"}}> Thank You for Choosing Us</h1>
    
    
     <button style={{color: "white", backgroundColor:"black", display:"flex", flexDirection:"column", alignItems:"center"}} onClick={handleNavigate}> Start Over</button>
     </div>
    </div>
    
   
    </>
   
  )
}
