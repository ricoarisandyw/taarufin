import React from 'react'
import './FirstSection.scss'

const FirstSection: React.FC = () => {
    return <section className="FirstSection">
        <div className="center Logo">
            <img src={require("../../assets/images/logo.png")} alt="logo" />
            <h3>
                Ketika dua insan<br />bertemu dengan ridho
            </h3>
        </div>
        <img className="Man" src={require("../../assets/images/man.png")} alt="man" />
        <img className="Woman" src={require("../../assets/images/woman.png")} alt="woman"/>
        <img className="LeftCloud" src={require("../../assets/images/left_cloud.png")} alt="left_cloud" />
        <img className="RightCloud" src={require("../../assets/images/right_cloud.png")} alt="right_cloud" />
        <img className="Desert " src={require("../../assets/images/desert.png")} alt="desert" />
    </section>
}

export default FirstSection