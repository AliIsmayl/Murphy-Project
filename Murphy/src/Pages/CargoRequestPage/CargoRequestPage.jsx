import React, { useEffect, useState } from 'react'
import './CargoRequestPage.scss'
import NotMean from '../../Components/NotMean/NotMean'
import axios from 'axios'
function CargoRequestPage() {
    const [select1Data, setSelect1Data] = useState([])
    const [select2Data, setSelect2Data] = useState([])
    const [select3Data, setSelect3Data] = useState([])

    async function GetData1() {
        const res = await axios.get("http://alihuseyn-001-site1.btempurl.com/api/Services/Get?page=1&take=6")
        setSelect1Data(res.data)
    }
    async function GetData2() {
        const res = await axios.get("http://alihuseyn-001-site1.btempurl.com/api/ToCountries/Get?page=1&take=200")
        setSelect2Data(res.data)
    }
    async function GetData3() {
        const res = await axios.get("http://alihuseyn-001-site1.btempurl.com/api/FromCountries/Get?page=1&take=200")
        setSelect3Data(res.data)
    }

    useEffect(() => {
        GetData1()
        GetData2()
        GetData3()
    }, [])

    return (
        <>
            <NotMean />
            <section id='cargoRequestPage'>
                <form action="">
                    <p>Client Trust Us</p>
                    <label htmlFor="">Cargo Request Quote</label>
                    <div className="allInPutBox">
                        <input type="text" placeholder='Company Name...' />
                        <input type="text" placeholder='Company Email...' />
                        <input type="text" placeholder='Company Phone...' />
                        <input type="text" placeholder='Address...' />
                        <input type="text" placeholder='Load Name...' />
                        <input type="number" placeholder='Load Weight...' />
                        <input type="number" placeholder='Load Capasity...' />
                        <select>
                            <option hidden>Choose one...</option>
                            {
                                select1Data && select1Data.map((item) => (
                                    <option value="">{item.name}</option>
                                ))
                            }
                        </select>
                        <select >
                            <option hidden>Choose one...</option>
                            {
                                select2Data && select2Data.map((item) => (
                                    <option value="">{item.name}</option>
                                ))
                            }
                        </select>
                        <select>
                            <option hidden>Choose one...</option>
                            {
                                select3Data && select3Data.map((item) => (
                                    <option value="">{item.name}</option>
                                ))
                            }
                        </select>

                    </div>
                    <button>Comparison</button>
                </form>
            </section>
        </>
    )
}

export default CargoRequestPage