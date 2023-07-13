import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Card.module.css'

export const Card = () => {

    const [car, setCar] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch("http://localhost:8081/cars/getAll")
            .then((response) => response.json())
            .then((data) => {
                setCar(data);
            })
            .catch((error) => console.log(error));
    }, []);



    function handleNavigate(car) {
        // console.log({ car })
        navigate(`/detail/${car.id}`, { state: car });
    }

    function handleNavigateRent(car) {
        // console.log({car})
        navigate(`/rentCar/${car.id}`, { state: car })
    }
    return (
        <>
            <div className={styles.main}>

                {car.map((car) => (
                    <div class="card" className={styles.cards}>
                        <img className={styles.cardImg} src={car.image} />
                        <div className={styles.desc}>
                        <h2 onClick={() => handleNavigate(car)} >{car.name}</h2>
                      
                            <p>{car.shortDescription}</p>
                            <p style={{marginTop:"20px"}}><b>Rental Charges: {car.price}</b></p>
                            <button style={{marginTop:"20px", padding:"5px", width:"190px"}} onClick={() => handleNavigateRent(car)} className={styles.btn} >Rent Now</button>
                        </div>

                    </div>

                    // <div class="row no-gutters bg-light position-relative">
                    //     <div class="col-md-6 mb-md-0 p-md-4" >
                    //         <img src={car.image}  alt="..." width="100px" height="300px" class="w-50" margin="40px"/>
                    //     </div>
                    //     <div class="col-md-6 position-static p-4 pl-md-0">
                    //         {/* <h1 class="mt-0">{car.name}</h1> */}
                    //         <h2 class="mt-0" onClick={() => handleNavigate(car)} style={{ margin: "20px", marginTop: "90px" }}>{car.name}</h2>
                    //         <p>{car.shortDescription}</p>
                    //         <h2>Rental Charges: {car.price} Rs</h2>
                    //         <button onClick={() => handleNavigateRent(car)} className={styles.btn} >Rent Now</button>
                    //     </div>
                    // </div>

                ))}

            </div>




        </>
    )
}
