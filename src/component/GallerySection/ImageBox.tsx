import React from 'react'
import './ImageBox.scss'

interface ImageProps {
    src: string
}

const ImageBox: React.FC<ImageProps> = (props:ImageProps) => {
    return (
        <div className="ImageBox">
            <img className="shadow" src={require("../../assets/images/image 1.jpg")} alt="gallery" />
            <div className="ImageTitle">
                This is title
            </div>
        </div>
    )
}

export default ImageBox