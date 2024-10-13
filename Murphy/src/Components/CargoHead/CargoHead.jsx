import React from 'react'
import './CargoHead.scss'
import { Link } from 'react-router-dom'

function CargoHead() {
    return (
        <section id='cargoHead'>
            <div className="backPage">
                <h1>Karqom haradadır?</h1>
                <div className="path">
                    <Link className='link' to={"/"}>Əsas səhifə</Link>
                //
                    <p>Karqom haradadır?</p>
                </div>
            </div>
        </section>
    )
}

export default CargoHead