import '../styles/PlayerList.css'
import Player from './Player';
import playerIcon1 from '../assets/playerIcon.png'
import { useState } from 'react';
import PopupAddPlayer from './PopupAddPlayer';


export default function PlayerList({players, addNewPlayer, rounds, addNewRound}){

    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const list = [];
    const scoreList = [];
    const [playerName, setName] = useState("");
    const addPlayer = ((name) => {
        alert(`Player ${name} will be added`)
        addNewPlayer([...players, {
            id: players.length +1 , name: name, score: "", icon: playerIcon1
        }])
        setName("")
        setIsOpen(false)
    });

    players.forEach((player) => {
    list.push(<Player 
        players={players} 
        addNewPlayer={addNewPlayer} 
        rounds={rounds} 
        addNewRound={addNewRound}
        key = {player.id}
        id={player.id}
        icon={player.icon}
        name = {player.name}
        score = {player.score}
        />);
    scoreList.push(parseInt(player.score, 10))
    });

    const addRound = (() => {
        const updatedList = [];
        players.forEach((player) => {
            player = {...player, score: ""}
            updatedList.push(player)
        })
        addNewPlayer(updatedList)
        addNewRound([...rounds, {id: rounds.length+1, scoreList: scoreList}]);

    });

    list.push(<li key='test'>
        {/* <button className='skyjo-player-add-item' onClick={() => addPlayer("Test")}>+</button> */}
        <button className='skyjo-player-add-item' onClick={togglePopup}>+</button>
        {isOpen && <PopupAddPlayer
      content={<>
        <b>Add a new player</b>
        <form>
        <label>Name:
            <input type="text" value={playerName} onChange={(e) => setName(e.target.value)} name="name"/>
        <button onClick={() => addPlayer(playerName)}>Add player</button>
        
        </label></form>
      </>}
      handleClose={togglePopup}
    />}
        </li> )
    return(
    <div className='skyjo-players'>
        <ul className='skyjo-player-list'>
            {list}
        </ul>

        <button className='skyjo-player-button' onClick={() => addRound()}>Ajouter la manche</button>
        <button className='skyjo-player-button' onClick={() => {localStorage.clear(); window.location.reload()}}>Nouvelle Partie</button>
    </div>)
    
}


