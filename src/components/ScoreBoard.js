import '../styles/ScoreBoard.css'
// import { useState } from 'react'
import ScoreTable from './ScoreTable'
import React from 'react'
import makeData from '../datas/makeData'
// // import { players } from '../datas/playerList'
// import { roundList } from '../datas/roundList'

const PLAYERS_ID = ['player1', 'player2', 'player3']

export default function ScoreBoard({players, addNewPlayer, rounds, adddNewRound}) {

    // const monsteraPrice = 8
    // const [cart, updateCart] = useState(0)

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

    // const columns = React.useMemo(
    //     () => [
    //       {
    //         Header: 'Round',
    //         accessor: 'round',
    //         Footer: 'TOTAL'
    //       },
    //       {
    //         Header: players[0].name,
    //         accessor: 'player' + 0,
    //         Footer: info => {
    //             // Only calculate total visits if rows change
    //             const total = React.useMemo(
    //               () =>
    //                 info.rows.reduce((sum, row) => row.values.player0 + sum, 0),
    //               [info.rows]
    //             )
  
    //             return <> {total}</>
    //           },
    //       },
    //       {
    //         Header: players[1].name,
    //         accessor: 'player1',
    //         Footer: info => {
    //             // Only calculate total visits if rows change
    //             const total = React.useMemo(
    //               () =>
    //                 info.rows.reduce((sum, row) => row.values.player1 + sum, 0),
    //               [info.rows]
    //             )
  
    //             return <> {total}</>
    //           },
    //       },
    //     ],
    //     []
    //   )

    const columns =columnsParams();
    
    const data = React.useMemo(() => makeData({players, rounds}), [players, rounds])
    
    return (
        <div className='skyjo-scoreboard '>
            <h2>Score</h2>
            <ScoreTable className='skyjo-score-table' columns={columns} data={data} />
        </div>
    )
}

