import React from 'react'
import ImageBox from './ImageBox'
import './GallerySection.scss'

const images = [
    "../../assets/images/image 1.jpg",
    "../../assets/images/image 2.jpg",
    "../../assets/images/image 3.jpg",
    "../../assets/images/image 4.jpg",
    "../../assets/images/image 5.jpg",
]

const GallerySection: React.FC = () => {
    return (
    <div className="GallerySection row p-5 bg-sand">
        <div className="col-lg-12 text-center">
            <h1>Gallery</h1>
        </div>
        <div className="col-lg-12">
            <div className="ImageList text-center marquee">
                {images.map((image) => {
                    return <ImageBox key={Symbol().description} src={image} />
                })}
                {images.map((image) => {
                    return <ImageBox key={Symbol().description} src={image} />
                })}
            </div>
        </div>
    </div>)
    
}

export default GallerySection