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
        navigate(`/detail/${car.id}`, { state: car });
    }
    return (
        <>
            <div>


                {car.map((car) => (
                    <div class="card" className={styles.cards}>

                        <img className={styles.cardImg} src={car.image} />
                        {/* <Link to={`/detail/${car.id}`}> */}
                        <h2 onClick={() => handleNavigate(car)}>{car.name}</h2>
                        {/* dh</Link> */}

                        <p>{car.shortDescription}</p>
                        <p><b>Rental Charges: {car.price}</b></p>
                        <Link to={`/rentCar/${car.id}`}>

                            <button className={styles.btn} >Rent Now</button>
                        </Link>

                    </div>
                ))}
            </div>




        </>
    )
}
