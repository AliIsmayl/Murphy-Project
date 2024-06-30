import React from 'react'
import './DetailPage.scss'
import { Link } from 'react-router-dom'
import NotMean from '../../Components/NotMean/NotMean'

function DetailPage() {
  return (
    <>
      <NotMean />
      <div id='detailPage'>
        <div className="imageBox" style={{ backgroundImage: "url(http://goodrise.like-themes.com/wp-content/uploads/2024/01/inner_HEADER.jpg)" }}>
          <div className="frontBox">
            <h1>Railway Freight</h1>
            <p>Home <span>//</span> Services <span>//</span> <Link className='link'>Truck</Link></p>
          </div>
        </div>
        <div className="imageAndTextBox">
          <div className="text">
            <span>The Basics of Logistics Services</span>
            <p>Logistics services encompass a broad range of activities aimed at efficiently managing the movement and storage of goods. This includes transportation, warehousing, inventory management, order fulfillment, and distribution. Effective logistics services are essential for businesses to meet customer demands, reduce costs, and enhance overall supply chain efficiency.

              The backbone of logistics services, transportation involves the movement of goods from one point to another. This can include various modes such as road, rail, air, and sea transport. Efficient transportation is critical for minimizing lead times and ensuring timely delivery.</p>
          </div>
          <div className="image" style={{ backgroundImage: "url(http://goodrise.like-themes.com/wp-content/uploads/2023/12/serv_01.jpg)" }}>
          </div>

        </div>
      </div>
    </>
  )
}

export default DetailPage