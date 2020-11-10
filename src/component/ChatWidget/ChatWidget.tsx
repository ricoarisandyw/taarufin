import React from 'react'
import './ChatWidget.scss'
import {BsChat} from 'react-icons/bs'
import { useHistory, useLocation } from 'react-router'
import Pages from '../../page/Pages'

const ChatWidget: React.FC = () => {
    const history = useHistory()
    const location = useLocation()

    return (
        <div className={["ChatWidget bg-blue shadow", location.pathname === Pages.Chatting ? "d-none":" "].join(' ')} onClick={() => history.push(Pages.Chatting)}>
            <div className="counter">3</div>
            <BsChat color="white" />
        </div>
    )   
}

export default ChatWidget