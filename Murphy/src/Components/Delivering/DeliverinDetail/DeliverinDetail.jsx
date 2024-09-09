import React, { useContext, useEffect, useState } from 'react'
import { BsClockFill } from "react-icons/bs";
import { RiToolsFill } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import './DeliverinDetail.scss'
import axios from 'axios'
import { FaCheck } from "react-icons/fa6";
import { useParams } from 'react-router-dom'
import { userContext } from '../../../Context/userContext';

function DeliverinDetail() {
  const [detail, setGetData] = useState([]);
  // const { trackingId } = useParams()
  const {searchText}=useContext(userContext)

  async function getAxiosData() {
    try {
      const res = await axios.get(`http://thetest-001-site1.ftempurl.com/api/Orders/GetByTrackingId/${searchText}`);
      setGetData(res.data);
      getAxiosData()
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getAxiosData();
  }, []);

  return (
    <>
      {
        detail ?
          <>
            <div id='orderDetailPage'>
              <div className="orderDetailBox">
                <div className="upBox">
                  <p>{detail.address}</p>
                </div>
                <div className="downBox">
                  <div className="allIconsBox">
                    <div className="iconBox">
                      <div className="icon"
                        style={{
                          background: detail.status === 1 ? "#5ccf5c" : detail.status === 2 ? "#5ccf5c" : detail.status === 3 ? "#5ccf5c" : detail.status === 4 ? "#5ccf5c" : "#b1b1b1"
                        }}
                      >
                        {
                          detail.status !== 1 ? <FaCheck /> : <BsClockFill />
                        }
                        <p>Hazırlanır</p></div>
                    </div>
                    <span></span>
                    <div className="iconBox">
                      <div className="icon" style={{
                        background: detail.status === 2 ? "#5ccf5c" : detail.status === 3 ? "#5ccf5c" : detail.status === 4 ? "#5ccf5c" : "#b1b1b1"

                      }}>
                        {
                          detail.status === 3 ? <FaCheck/> :detail.status === 4 ?<FaCheck/>: <RiToolsFill  />
                        } <p>Gömrükləmə başa çatdı</p></div>
                    </div>
                    <span></span>
                    <div className="iconBox">
                      <div className="icon" style={{
                        background: detail.status === 3 ? "#5ccf5c" : detail.status === 4 ? "#5ccf5c" : "#b1b1b1"

                      }}>
                        {
                          detail.status !== 4 ? <FaTruck /> : < FaCheck />
                        }
                        <p>Yoldadır</p></div>
                    </div>
                    <span></span>
                    <div className="iconBox">
                      <div className="icon" style={{
                        background: detail.status === 4 ? "#5ccf5c" : "#b1b1b1"
                      }}>
                        <FaCircleCheck /><p>Təyin olunmuş yere çatdı</p></div>
                    </div>
                  </div>
                  <h1></h1>
                  <p>Tracking ID: {detail.trackingId}</p>
                  <p>Company Name: {detail.companyName}</p>
                  <p>Company Email: {detail.companyEmail}</p>
                  <p>Company Phone: {detail.companyPhone}</p>
                  <p>Address: {detail.address}</p>
                  <p>Load Name: {detail.loadName}</p>
                  <p>Load Weight: {detail.loadWeight}</p>
                  <p>Load Capasity: {detail.loadCapasity}</p>
                </div>
              </div>
            </div>
          </>
          : ""
      }
    </>
  )
}

export default DeliverinDetail