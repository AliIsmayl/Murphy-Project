import React, { useContext, useState } from 'react';
import './AdminAboutCreatePage.scss';
import NotMeanDashBoard from '../../../Components/NotMeanDashBoard/NotMeanDashBoard';
import { Link, useNavigate } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';
import axios from 'axios';
import { userContext } from '../../../Context/userContext';
import toast from 'react-hot-toast';

function AdminAboutCreatePage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const { user } = useContext(userContext);
    const token = localStorage.getItem("token");
    const navigate = useNavigate()
    async function handleCreate(e) {
        e.preventDefault();
        console.log("image", image);

        if (token) {
            const formData = new FormData();
            formData.append("Tittle", title);
            formData.append("Description", description);
            formData.append("Image", image);

            try {
                const res = await axios.post("http://alihuseyn-001-site1.btempurl.com/api/Abouts/Create", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": "Bearer " + token
                    },
                });
                toast.success('Əlavə edildi...')
                navigate('/admin/about')

            } catch (error) {
                console.log(error.message);
            }
        } else {
            alert("login ol");
        }
    }


    function handleImageChange(e) {
        setImage(e.target.files[0]);
    }

    return (
        <div style={{ display: "flex" }}>
            <NotMeanDashBoard />
            <div className='createPage'>
                <button className='home'>
                    <Link to={"/admin/about"}><IoChevronBackOutline /></Link>
                </button>
                <div className='createTableBox'>
                    <form onSubmit={handleCreate}>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Title...' />
                        <input type="text" onChange={(e) => setDescription(e.target.value)} placeholder='Description...' />
                        <input type="file" onChange={handleImageChange} />
                        <button type='submit'>Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminAboutCreatePage;
