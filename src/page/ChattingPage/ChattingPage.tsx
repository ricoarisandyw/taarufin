import React, { useState } from 'react'
import './ChattingPage.scss'
import ContactBox from '../../component/ContactBox/ContactBox'
import {MdArrowBack} from 'react-icons/md'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineSend, AiOutlineExclamationCircle} from 'react-icons/ai'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import { FirebaseState } from '../../redux/reducers/FirebaseReducers'

const ChattingPage: React.FC = () => {
    const {firestore, auth} = useSelector<RootState, FirebaseState>((state)=>state.firebase)

    const [user] = useAuthState(auth)
    const [showMenu, setShowMenu] = useState(false)
    const messagesRef = firestore?.collection('taaruf')
    const query = messagesRef?.limit(100)
    const [messages] = useCollectionData(query)

    const [inputMessage, setInputMessage] = useState("")

    const handleSubmit = () => {
        console.log("Submit")
        messagesRef?.add({
            sender: user.email,
            message: inputMessage,
            created_at: new Date().toString()
        })
        setInputMessage('')
    }

    const sorByCreatedAt = (messageNow: any, messageNext: any) => new Date(messageNow.created_at).getTime() - new Date(messageNext.created_at).getTime()

    console.log(messages, user)
    if(messages && user){
        return (
            <div className="ChattingPage row">
                <div className="LeftSide col-lg-3 pr-0 shadow">
                    <div className="ChatSearch p-3">
                        <BsSearch className="mr-3" />
                        Search here ...
                    </div>
                    <div className="ContactList">
                        <ContactBox />
                        <ContactBox />
                        <ContactBox />
                        <ContactBox />                    
                    </div>
                </div>
                <div className="RightSide col-lg-9 pl-0">
                    <div className="ChatRoomHeader d-flex p-3 bg-pink-dark shadow">
                        <div className="mt-auto mb-auto mr-3">
                            <MdArrowBack size="1.5em" />
                        </div>
                        <h3 className="mt-auto mb-auto">{user ? user.displayName : "..."}</h3>
                        <div className="mt-auto mb-auto ml-auto float-right cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
                            <AiOutlineExclamationCircle size="1.5em" />
                        </div>
                        <div className={["Menu shadow",showMenu? "": "d-none"].join(' ')}>
                            <div className="MenuItem">Mock</div>
                            <div className="MenuItem">Not Active</div>
                            <div className="MenuItem">Bad Word</div>
                        </div>
                    </div>
                    <div className="ChatRoom p-3">
                        {
                            messages ? messages?.sort(sorByCreatedAt).map((message: any) => (
                                <div className={["ChatBubble mb-3",user && message.sender === user.email ? "sender" : "receiver"].join(' ')}>
                                    <small>{message.sender}</small>
                                    <div>
                                        {message.message}
                                    </div>
                                </div>
                            )) : null
                        }
                    </div>
                    <div className="ChatInput p-3 shadow">
                        <input value={inputMessage} placeholder="Input here ..." onChange={(event) => setInputMessage(event.target.value)} />
                        <div className="float-right mr-3 cursor-pointer" onClick={handleSubmit}>
                            <AiOutlineSend />
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return <div></div>
    }
}

export default ChattingPage