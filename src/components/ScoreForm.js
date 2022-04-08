import { useState } from 'react'
import '../styles/ScoreForm.css'

function ScoreForm({players, addNewPlayer, id}) {
    const [inputValue, setInputValue] = useState(0)

    const newScore = (e) => {
        setInputValue(e.target.value);
        const updatedList = [];
        players.forEach((player) => {
            if(player.id === id){
                player = {...player, score: e.target.value }
            }
            updatedList.push(player)
        })
        addNewPlayer(updatedList)
    };
    return (
        <div>
            <input
                className='skyjo-form-input'
                value={inputValue}
                onChange={(e) => newScore(e)}
            />
        </div>
    )
}

export default ScoreForm