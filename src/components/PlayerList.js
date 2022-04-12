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
        if(rounds.toString() !== ""){
            alert(`La partie est en cours !`)
        }else if(name === ""){
            alert(`Merci de renseigner un nom`)
        }else{
            // alert(`Player ${name} will be added`)
            addNewPlayer([...players, {
                id: players.length +1 , name: name, score: "", icon: playerIcon1
            }])
            setName("")
            setIsOpen(false)
        }
    });

    const addRound = (() => {
        const updatedList = [];
        let stop = false;
        players.forEach((player) => {
            if(player.score){
                scoreList.push(parseInt(player.score, 10))
                player = {...player, score: ""}
                updatedList.push(player)
            }else{
                stop = true;
                updatedList.push(player)
            }
        });
        if(!stop){
            window.location.reload();
            addNewRound([...rounds, {id: rounds.length+1, scoreList: scoreList}]);
        }else{
            alert("Add a score for each player")
        }
        addNewPlayer(updatedList)
        window.location.reload();
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
    });

    list.push(<li key='playerList'>
        {/* <button className='skyjo-player-add-item' onClick={() => addPlayer("Test")}>+</button> */}
        <button className='skyjo-player-add-item' onClick={togglePopup}>+</button>
        {isOpen && <PopupAddPlayer
      content={<>
        <b>Add a new player</b>
        <form>
        <label>Name:
            <div><input type="text" value={playerName} onChange={(e) => setName(e.target.value)} name="name"/></div>
            <div><button onClick={() => addPlayer(playerName)}>Add player</button></div>
        
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


