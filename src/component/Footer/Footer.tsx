import React from 'react'
import './Footer.scss'

const Footer: React.FC = () => {
    return <footer>
        <div className="row p-5">
            <div className="col-sm-12 col-md-4">
                <h1>Taaruf.in</h1>
                <p>
                    Jogjakarta Jl. Malioboro no 12
                    <br /> Mid Java, Indonesia
                    <br /> salam@taarufin.id
                </p>
            </div>
            <div className="col-sm-12 col-md-4">
                <h3>Servis kami</h3>
                <ul className="list-no-style">
                    <li>Menemukan Pasangan</li>
                    <li>Jasa Taaruf</li>
                    <li>Materi Pra-nikah</li>
                </ul>
            </div>
            <div className="col-sm-12 col-md-4">
                <h3>Update</h3>
                <ul className="list-no-style">
                    <li>Taarufin mendapatkan suntikan dana 1M</li>
                    <li>User taarufin melonjak 300%</li>
                    <li>Rakyat lebih memilih taaruf</li>
                </ul>
            </div>
        </div>
        <div className="row pb-3">
            <div className="col-lg-12 text-center">
                Copyright Taarufin.id 2020
            </div>
        </div>
    </footer>
}

export default Footer