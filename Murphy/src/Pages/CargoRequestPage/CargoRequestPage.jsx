import React, { useEffect, useState } from 'react';
import './CargoRequestPage.scss';
import NotMean from '../../Components/NotMean/NotMean';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const token = localStorage.getItem("token");
function CargoRequestPage() {
    const [select1Data, setSelect1Data] = useState([]);
    const [select2Data, setSelect2Data] = useState([]);
    const [select3Data, setSelect3Data] = useState([]);
    const [companyName, setCompanyName] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [companyPhone, setCompanyPhone] = useState('');
    const [address, setAddress] = useState('');
    const [loadName, setLoadName] = useState('');
    const [loadWeight, setLoadWeight] = useState('');
    const [loadCapasity, setLoadCapasity] = useState('');
    const [services, setServices] = useState(''); // Changed from sevices to services
    const [toCountry, setToCountry] = useState('');
    const [fromCountry, setFromCountry] = useState('');
    const navigate = useNavigate()

    async function GetData1() {
        const res = await axios.get("http://alihuseyn-001-site1.btempurl.com/api/Services/Get?page=1&take=6");
        setSelect1Data(res.data);
    }

    async function GetData2() {
        const res = await axios.get("http://alihuseyn-001-site1.btempurl.com/api/ToCountries/Get?page=1&take=200");
        setSelect2Data(res.data);
    }

    async function GetData3() {
        const res = await axios.get("http://alihuseyn-001-site1.btempurl.com/api/FromCountries/Get?page=1&take=200");
        setSelect3Data(res.data);
    }

    async function handleCreateInform(e) {
        e.preventDefault();
        if (token) {
            const formData = new FormData();
            formData.append("companyName", companyName);
            formData.append("companyEmail", companyEmail);
            formData.append("companyPhone", companyPhone);
            formData.append("address", address);
            formData.append("loadName", loadName);
            formData.append("loadWeight", loadWeight);
            formData.append("loadCapasity", loadCapasity);
            formData.append("serviceId", services);
            formData.append("fromCountryId", fromCountry);
            formData.append("toCountryId", toCountry);

            try {
                const res = await axios.post("http://alihuseyn-001-site1.btempurl.com/api/Orders/Create", formData, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                });
                toast.success('Əlavə edildi...');
                // Optionally, you can reset form fields or fetch updated data here
                // resetFormFields();
                // getAxiosData();
                navigate('/')
            } catch (error) {
                console.error('Error creating order:', error);
                toast.error(error.message);
            }
        } else {
            alert("Giriş yapınız.");
        }
    }


    useEffect(() => {
        GetData1();
        GetData2();
        GetData3();
    }, []);

    return (
        <>
            <NotMean />
            <section id='cargoRequestPage'>
                <form onSubmit={(e) => handleCreateInform(e)}>
                    <p>Client Trust Us</p>
                    <label>Cargo Request Quote</label>
                    <div className="allInPutBox">
                        <input type="text" placeholder='Company Name...' onChange={(e) => setCompanyName(e.target.value)} />
                        <input type="email" placeholder='Company Email...' onChange={(e) => setCompanyEmail(e.target.value)} />
                        <input type="text" placeholder='Company Phone...' onChange={(e) => setCompanyPhone(e.target.value)} />
                        <input type="text" placeholder='Address...' onChange={(e) => setAddress(e.target.value)} />
                        <input type="text" placeholder='Load Name...' onChange={(e) => setLoadName(e.target.value)} />
                        <input type="number" placeholder='Load Weight...' onChange={(e) => setLoadWeight(e.target.value)} />
                        <input type="number" placeholder='Load Capasity...' onChange={(e) => setLoadCapasity(e.target.value)} />
                        <select onChange={(e) => setServices(e.target.value)}>
                            <option hidden>Choose one...</option>
                            {
                                select1Data && select1Data.map((item) => (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                ))
                            }
                        </select>
                        <select onChange={(e) => setToCountry(e.target.value)}>
                            <option hidden>Choose one...</option>
                            {
                                select2Data && select2Data.map((item) => (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                ))
                            }
                        </select>
                        <select onChange={(e) => setFromCountry(e.target.value)}>
                            <option hidden>Choose one...</option>
                            {
                                select3Data && select3Data.map((item) => (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                ))
                            }
                        </select>

                    </div>
                    <button type='submit'>Comparison</button>
                </form>
            </section>
        </>
    )
}

export default CargoRequestPage;
