import React from 'react'
import { Link } from 'react-router-dom'

export const Thanks = () => {
    return (
        <>
            <div style={{display: "flex", flexDirection:"column", alignItems: 'center'}}>
                <h2> Thanks for your order</h2>
                <Link to='/'>
                    <button type="submit" class="btn btn-secondary" >Start Over</button>
                </Link>
            </div>

        </>

    )
}
