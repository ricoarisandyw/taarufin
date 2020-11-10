import React from 'react'
import './MatchCard.scss'

import { IoMdHeartEmpty, IoMdHeartDislike, IoMdBookmark} from 'react-icons/io';

interface MatchCardProps {
    id: number
    onMore: (id: number) => void
    show?: boolean
    selected: boolean
}

const MatchCard: React.FC<MatchCardProps> = (props: MatchCardProps) => {
    return (
        <div className={["MatchingCard shadow", props.show ? "":"scale-0", props.selected ? "CardSelected": ""].join(' ')}>
            <div className="CardName w-100 text-center mt-3">
                <span className="mx-auto bg-light shadow p-2 pl-5 pr-5 btn-circled">PUTRI AYU</span>
            </div>
            <div className="CardPhoto">
                <img src={require("../../assets/images/muslimah.jpg")} alt="thumbnail" />
            </div>
            <div className="BottomCard">
                <div className="CardHighlight ml-1">
                    <div>
                        <button className="btn btn-circled-small btn-success mb-1 shadow">23</button>
                    </div>
                    <div><button className="btn btn-circled-small btn-success mb-1 shadow">Surabaya</button></div>
                    <div><button className="btn btn-circled-small btn-success mb-1 shadow" onClick={(): void => props.onMore(props.id)}>More ...</button></div>
                </div>
                <div className="MatchingToolbar text-center p-3">
                    <div className="Unlike">
                        <IoMdHeartDislike size="1.5rem" />
                    </div>
                    <div className="Heart bg-light shadow radius-max">
                        <IoMdHeartEmpty color="black" size="1.5rem" className="HeartIcon my-auto mx-auto" />
                    </div>
                    <div className="Bookmark">
                        <IoMdBookmark size="1.5rem" />
                    </div>
                </div>
            </div>
        </div>
    )
}

MatchCard.defaultProps = {
    show: true
}

export default MatchCard