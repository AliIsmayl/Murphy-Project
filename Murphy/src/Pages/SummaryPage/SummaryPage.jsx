import React from 'react'
import NotMean from '../../Components/NotMean/NotMean'
import './SummaryPage.scss'
import { Link } from 'react-router-dom'

function SummaryPage() {
    return (
        <>
            <NotMean />
            <section id='summaryHead'>
                <div className="backPage">
                    <h1>Xülasə</h1>
                    <div className="path">
                        <Link className='link' to={"/"}>Ana səhifə</Link>
                //
                        <p>Xülasə</p>
                    </div>
                </div>
            </section>
            <div className="normalBox">
                <img src="https://murphy.az/wp-content/uploads/2023/08/Ramin-768x506.jpg" alt="" />
                <p>Cədvəl və büdcə daxilində “Dünya ilə körpü qurmaq”

                    “Murphy Shipping and Commercial Services” MMC Murphy Group prinsiplərinin innovativ və səmərəli davamçısıdır.

                    1993-cü ildə qurulan o, bütövlükdə Xəzər regionunda və xüsusilə Azərbaycanda logistika sənayesində tələbatı ödəmək üçün sürətlə inkişaf etmişdir.
                    Biz tikinti, ənənəvi və bərpa olunan enerji də daxil olmaqla iqtisadiyyatın bütün əsas sektorlarını təchizat zəncirinin logistikası ilə təmin etməyə imkan verəcək anbar və inventar idarəetmə biznesimizi inkişaf etdirmək istəyirik.

                    Bizim biznes yanaşmamız sadə və düzdür. Keyfiyyəti, peşəkar İdarəetmə Qrupumuzun sistematik yanaşmasına, güclü Marketinq və Əməliyyat personalına əməl etməklə müştərilərimizin tələblərinə daim cavab vermək və ya ondan artıq olmaq kimi müəyyən edirik. Etibarlı, Səmərəli, Sərfəli</p>
            </div>
        </>
    )
}

export default SummaryPage