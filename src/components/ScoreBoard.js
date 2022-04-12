import '../styles/ScoreBoard.css'
// import { useState } from 'react'
import ScoreTable from './ScoreTable'
import React from 'react'
import makeData from '../datas/makeData'
import { useState } from 'react'
// // import { players } from '../datas/playerList'
// import { roundList } from '../datas/roundList'
import PopupAddPlayer from './PopupAddPlayer'
const PLAYERS_ID = ['player1', 'player2', 'player3', 'player4', 'player5']

export default function ScoreBoard({players, addNewPlayer, rounds, adddNewRound}) {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    // const computeTotal = (player, i) => { 
    //     let total = 0
    //     rounds.forEach((round) => {
    //         total += round.scoreList[player.id-1]
    //     })
    //     return total
    // };

    const columnsParams = React.useCallback(() =>{
        const cp =[
            {
            Header: 'Round',
            accessor: 'round',
            Footer: 'TOTAL'
            }
        ];

        players.forEach( (player, i) => {
            cp.push({
                Header: player.name,
                accessor: PLAYERS_ID[i],
                
                Footer:info => {
                // Only calculate total visits if rows change
                const total = React.useMemo(
                    () => 
                    info.rows.reduce((sum, row) => rounds[row.values.round-1].scoreList[i] + sum, 0),
                    [info.rows]
                )

                return <> {total}</>
                },
            })
        });
        return cp;
    }, [players, rounds] );

  

    const columns = columnsParams();

    // players.forEach(player => {
    //     const total = computeTotal(player);
    //     if (total >= 100){
    //         setIsOpen(!isOpen);
    //         //togglePopup();
    //         //alert(`${player.name} a perdu !`);
    //         // localStorage.clear(); 
    //         // window.location.reload();
    //     }
    // })
    
    const data = React.useMemo(() => makeData({players, rounds}), [players, rounds])
    
    return (
        <div className='skyjo-scoreboard '>
            <h2>Score</h2>
            <ScoreTable className='skyjo-score-table' columns={columns} data={data} />
            <div>{isOpen && <PopupAddPlayer
      content={<>
        <b>Add a new player</b>
        <div>Name:
        
        </div>
      </>}
      handleClose={togglePopup}/> }</div>
        </div>
    )
}

