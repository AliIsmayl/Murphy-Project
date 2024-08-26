import React from 'react'
import './NewsDetailPage.scss'
import { Link } from 'react-router-dom'
import NotMean from '../../Components/NotMean/NotMean'

function NewsDetailPage() {
    return (
        <>
            <NotMean />
            <section id='newsDetailPage'>
                <div id='newsDetailHead'>
                    <div className="backPage">
                        <h1>Transportation</h1>
                        <div className="path">
                            <Link className='link' to={"/news"}>News</Link>
                //
                            <p>Transportation</p>
                        </div>
                    </div>
                </div>
                <div id="newDetailTextBox">
                    <div className="imgBox">
                        <img src="http://goodrise.like-themes.com/wp-content/uploads/2023/12/blog_16.jpg" alt="" />
                    </div>
                    <div className="textBox">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti tempora error quae fuga blanditiis? Aut velit reprehenderit quaerat sapiente provident amet nisi dolor deleniti possimus impedit corporis tempora nobis labore eligendi modi, ea esse, ex rerum nesciunt veniam, eaque quasi. Laborum ipsam consectetur architecto, illum tempora ipsa, molestias sapiente vitae qui aliquam quisquam iste alias impedit obcaecati expedita perferendis natus non eos. Natus, saepe laudantium? Nisi, eaque! Nobis dolorum cum mollitia, facilis reprehenderit, illo explicabo maiores qui quidem aliquid dignissimos ipsum obcaecati iste delectus quae. Ipsa fuga odio quam? Tenetur ad aut culpa dolorem nam expedita earum dicta recusandae minima.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsDetailPage