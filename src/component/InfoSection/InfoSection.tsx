import React from 'react'
import './InfoSection.scss'

const InfoSection: React.FC = () => {
    return <section className="InfoSection pt-5 pb-5"> 
        <div className="row">
            <div className="col-sm-12 text-center pt-3 pb-3">
                <h1>How We Works</h1>
            </div>
            <div className="col-lg-3 col-sm-6 text-center ZoomHover">
                <div>
                    <img src={require('../../assets/images/register.png')} alt="register" />
                </div>
                <h3>REGISTRASI</h3>
                <span className="btn btn-success circled">REGISTER</span>
            </div>
            <div className="col-lg-3 col-sm-6 text-center">
                <div className="mt-lg-5">
                    <img src={require('../../assets/images/cv.png')} alt="register" />
                </div>
                <h3>CONTOH CV</h3>
                <span className="btn btn-success circled">FILL YOUR CV</span>
            </div>
            <div className="col-lg-3 col-sm-6 text-center">
                <div>
                    <img src={require('../../assets/images/blue_blob.png')} alt="register" />
                </div>
                <h3>CARA KERJA</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus porro omnis sed hic, distinctio sequi magni corrupti ipsam maxime ducimus ea exercitationem voluptate, natus dignissimos rem placeat esse. Officia, modi.
                </p>
                <span className="btn btn-success circled">TUTORIAL</span>
            </div>
            <div className="col-lg-3 col-sm-6 text-center">
                <div className="mt-lg-5">
                    <img src={require('../../assets/images/green_blob.png')} alt="register" />
                </div>
                <h3>MEMANTASKAN</h3>
                <span className="btn btn-success circled">GUIDE</span>
            </div>
        </div>
    </section>
}

export default InfoSection