import React from 'react'
import './NewsPage.scss'
import NewsHead from '../../Components/NewsHead/NewsHead'
import NotMean from '../../Components/NotMean/NotMean'
import NewsAllPacket from '../../Components/NewsAllPacket/NewsAllPacket'

function NewsPage() {
    return (
        <section id='newsPage'>
            <NotMean />
            <NewsHead />
            <NewsAllPacket/>
        </section>
    )
}

export default NewsPage