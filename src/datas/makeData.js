const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newRound = (len, players, rounds) => {
    let scores = [];
    players.forEach((player) => {
        scores.push(player.score)
    })
  return {
    round: len+1, 
    player1: rounds[len].scoreList[0], 
    player2: rounds[len].scoreList[1], 
    player3: rounds[len].scoreList[2], 
    player4: rounds[len].scoreList[3], 
    player5: rounds[len].scoreList[4]
  }
}

export default function makeData({players, rounds}) {
    const len = rounds.length
    return range(len).map(d => {
      return {
        ...newRound(d, players, rounds)
      }
    })
}
