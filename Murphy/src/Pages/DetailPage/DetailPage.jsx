import React, { useEffect, useState } from 'react'
import './DetailPage.scss'
import { Link, useParams } from 'react-router-dom'
import NotMean from '../../Components/NotMean/NotMean'
import axios from 'axios'

function DetailPage() {
  const [detail, setGetData] = useState([]);
  const { id } = useParams()

  async function getAxiosData() {
    try {
      const res = await axios.get(`http://thetest-001-site1.ftempurl.com/api/Services/Get/${id}?isdeleted=false`);
      setGetData(res.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getAxiosData();
  }, []);
  return (
    <>
      {detail ?
        <>
          <NotMean />
          <div id='detailPage'>
            <div className="imageBox" style={{ backgroundImage: "url(http://goodrise.like-themes.com/wp-content/uploads/2024/01/inner_HEADER.jpg)" }}>
              <div className="frontBox">
                <h1>{detail.name}</h1>
                <p>Home <span>//</span> Services <span>//</span> <Link className='link'>{detail.name}</Link></p>
              </div>
            </div>
            <div className="imageAndTextBox">
              <div className="text">
                <span>{detail.tittle}</span>
                <p>{detail.tittle}</p>
              </div>
              <div className="image" style={{ backgroundImage: `url(${detail.image})` }}>
              </div>
            </div>
          </div>
        </>
        : ""}
    </>
  )
}

export default DetailPage