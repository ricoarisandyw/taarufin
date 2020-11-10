import React, { useState } from 'react'
import './ChattingPage.scss'
import ContactBox from '../../component/ContactBox/ContactBox'
import {MdArrowBack} from 'react-icons/md'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineSend, AiOutlineExclamationCircle} from 'react-icons/ai'

const ChattingPage: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false)

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
                    <h3 className="mt-auto mb-auto">Putri</h3>
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
                <div className="ChatBubble sender">
                        Hello
                    </div>
                    <div className="ChatBubble receiver">
                        World
                    </div>
                    <div className="ChatBubble sender">
                        Hello
                    </div>
                    <div className="ChatBubble receiver">
                        World
                    </div>
                    <div className="ChatBubble sender">
                        Hello
                    </div>
                    <div className="ChatBubble receiver">
                        World
                    </div>
                    <div className="ChatBubble sender">
                        Hello
                    </div>
                    <div className="ChatBubble receiver">
                        World
                    </div>
                    <div className="ChatBubble sender">
                        Hello
                    </div>
                    <div className="ChatBubble receiver">
                        World
                    </div>
                    <div className="ChatBubble sender">
                        Hello
                    </div>
                    <div className="ChatBubble receiver">
                        World
                    </div>
                    <div className="ChatBubble sender">
                        Hello
                    </div>
                    <div className="ChatBubble receiver">
                        World
                    </div>
                </div>
                <div className="ChatInput p-3 shadow">
                    <input placeholder="Input here ..." />
                    <div className="float-right mr-3">
                        <AiOutlineSend />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChattingPage