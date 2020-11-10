import React from 'react'
import './ContactBox.scss'

const ContactBox: React.FC = () => {
    return (
        <div className="ContactBox d-flex">
            <div className="ContactAvatar ml-3 mr-3 mt-auto mb-auto">
                <img src={require('../../assets/images/image 2.jpg')} alt="avatar" />
            </div>
            <div className="mt-auto mb-auto">
                <div>
                    <b>Contact Name</b>
                </div>
                <div className="ContactLatestChat">
                    this is latest chat
                </div>
            </div>
        </div>
    )
}

export default ContactBox