import '../styles/App.css';
import Banner from './Banner'
import PlayerList from './PlayerList';
import ScoreBoard from './ScoreBoard';
import { useState, useEffect } from 'react';
// import Cart from './Cart'
// import ShoppingList from './ShoppingList';

function App() {

    const savedPlayers = localStorage.getItem('playerList')
    const savedRounds = localStorage.getItem('roundList')
    
    const [players, addNewPlayer] = useState(savedPlayers ? JSON.parse(savedPlayers) : [])
    const [ rounds, addNewRound ] = useState(savedRounds ? JSON.parse(savedRounds) : [])
    useEffect(() => {
            localStorage.setItem('playerList', JSON.stringify(players))
            localStorage.setItem('roundList', JSON.stringify(rounds))
        }, [players, rounds])

    return ( 
    <div>
        <Banner />
        <ScoreBoard players={players} addNewPlayer={addNewPlayer} rounds={rounds} addNewRound={addNewRound}/>
        <PlayerList players={players} addNewPlayer={addNewPlayer} rounds={rounds} addNewRound={addNewRound}/>
        {/* <Cart />
        <ShoppingList /> */}
    </div>
    );
}

export default App;