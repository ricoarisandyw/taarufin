import React from 'react'
import { Link } from 'react-router-dom'
import Pages from '../../page/Pages'
import './NewsSection.scss'
 
export const NewsBox: React.FC = () => {
    return (
        <div className="NewsBox px-5 py-3 d-flex">
            <div className="NewsThumbnail">
                <img className="rounded shadow" src={require("../../assets/images/image 1.jpg")} alt="thumbnail"/>
            </div>
            <div className="NewsContent pl-3">
                <h2 className="font-playfair">This is news title</h2>
                <div className="mb-3">
                    <span className="badge badge-primary mr-1">10 oct 2020</span>
                    <span className="badge badge-danger mr-1">Developer</span>
                    <span className="badge badge-success mr-1">Marketing</span>
                    <span className="badge badge-light">Insight</span>
                </div>
                <p className="font-skia">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sequi numquam, quas maxime nihil autem? Voluptatem eaque maiores quisquam illum, laboriosam magni delectus nihil rem aut laudantium labore recusandae natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sequi numquam, quas maxime nihil autem? Voluptatem eaque maiores quisquam illum, laboriosam magni delectus nihil rem aut laudantium labore recusandae natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sequi numquam, quas maxime nihil autem? Voluptatem eaque maiores quisquam illum, laboriosam magni delectus nihil rem aut laudantium labore recusandae natus!</p>
                <Link to={Pages.Article}>
                <button className="btn btn-dark">
                    READ MORE
                </button> 
                </Link>
            </div>
        </div>
    )
}

const NewsSection: React.FC = () => {
    return <div className="NewsSection bg-sand">
        <div className="text-center">
            <h1>Our Update</h1>
        </div>
        <div>
            <NewsBox />
            <NewsBox />
            <NewsBox />
        </div>
    </div>
}

export default NewsSection