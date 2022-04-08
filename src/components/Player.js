import '../styles/Player.css'
import ScoreForm from './ScoreForm.js'


// function handleClick(plantName) {
//     console.log('✨ Ceci est un clic ✨')
//     alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
// }


// function handleSubmit(e) {
//     e.preventDefault()
//     alert(e.target['my_input'].value)
// }

export default function Player({players, addNewPlayer, rounds, addNewRound, id, name, icon, score}){

    return (
        <li key={id} className='skyjo-player-item' >
            <img className='skyjo-player-icon' src={icon} alt={`${name} cover`} />
            <div className='skyjo-player-name'>{ name }</div>
            <div className='skyjo-score-form'>
            <ScoreForm players={players} addNewPlayer={addNewPlayer} rounds={rounds} addNewRound={addNewRound} id={id}></ScoreForm></div>
        </li>
    );

}