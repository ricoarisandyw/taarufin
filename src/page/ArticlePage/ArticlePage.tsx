import React from 'react'
import {BsBookmark} from 'react-icons/bs'
import {BiShareAlt} from 'react-icons/bi'

const ArticlePage: React.FC = () => {
    return (
        <div>
            <div className="container p-5">
                <div className="float-right">
                    <BsBookmark size="1.5em" /> <BiShareAlt size="1.5em" />
                </div>
                <div className="content">
                    <h1>Follow Us at Instagram</h1>
                    <br />
                    <b>Hello</b>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti in nemo harum repellendus numquam eum, ducimus nam, ipsa assumenda fuga reiciendis ut saepe doloribus eaque. Iure sequi voluptatibus culpa.
                    </p>
                    <br />
                    <br />
                    <div className="row">
                        <iframe title="postInstagram" className="card shadow" src="https://www.instagram.com/p/CF34C1iHs65/embed" width="400" height="610" frameBorder="0" scrolling="no" allowTransparency={true} />
                        <iframe title="postInstagram" className="card shadow" src="https://www.instagram.com/p/CFtrxVBH40i/embed" width="400" height="610" frameBorder="0" scrolling="no" allowTransparency={true} />
                    </div>s
                </div>
            </div>
        </div>
    )
} 

export default ArticlePage