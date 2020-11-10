import React, { useState } from 'react'
import MatchCard from '../../component/MatchingCard/MatchCard'
import './MatchingPage.scss'

const MatchingPage: React.FC = () => {
    const [selectedId, setSelectedId] = useState(0)

    const handleOnMore = (id:number) => {
        if(selectedId === 0) setSelectedId(id)
        else setSelectedId(0)
    }

    return (
        <div className="MatchingPage p-5 bg-sky">
            <div className={["CardList",selectedId === 0 ? "justify-content-space-around": "justify-content-center"].join(' ')}>
                {[1,2,3].map((id: number) => 
                    <MatchCard key={"card"+id} id={id} onMore={handleOnMore} selected={id === selectedId} show={id === selectedId || selectedId === 0} />
                )}
                <div className={["CardDetail", selectedId === 0 ? "d-none": ""].join(' ')}>
                    <h2>Putri Ayu</h2>
                    <b>23 yo</b>
                    <h3>Criteria</h3>
                    <p>Mencari muslim yang sering sholat dhuhah dan sholat tahajud</p>
                </div>
            </div>
            <div className="text-center pt-5 font-skia">
                <h2>Anda berkesempatan mengenal 3 orang lagi</h2>
            </div>
        </div>
    )
}

export default MatchingPage