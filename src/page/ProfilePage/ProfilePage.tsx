import React from 'react'
import {FaPencilAlt} from 'react-icons/fa';

const ProfilePage: React.FC = () => {
    return (
        <div className="bg-sky p-5 font-heading">
            <div className="bg-white row p-5 rounded">
                <div className="col-lg-4 text-center">
                    <img className="w-100 rounded" src={require('../../assets/images/muslimah.jpg')} alt="profile" />
                    <span className="btn btn-success btn-circled mt-3">SAVE</span>
                </div>
                <div className="col-lg-8">
                    <h3>My stats</h3>
                    <div className="row shadow rounded p-3">
                        <div className="col-lg-4 text-center">
                            <h1>23</h1>
                            Taaruf Process
                        </div>
                        <div className="col-lg-4 text-center">
                        <h1>30</h1>
                            Waiting for Match
                        </div>
                        <div className="col-lg-4 text-center">
                        <h1>3</h1>
                            Taaruf Not Continued
                        </div>
                    </div>
                    <div className="mt-3">
                        <h1>
                            Putri Ayu <FaPencilAlt size="1.5rem" color="blue" />
                        </h1>
                        <b>23 years old</b>
                        <br /><b>Surabaya</b>
                        <br />
                        <br />
                        <b>Criteria :</b>
                        <p>I looking for muslim, hafidz at least 3 juz and always doing dhuha and tahajud</p>
                        <b>Education :</b>
                        <p>
                            Master Degree in Bussiness Management
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
