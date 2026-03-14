/**
 * 🏏 Cricket Player Stats Dashboard
 *
 * IPL ka stats dashboard bana raha hai tu! Har function ARROW FUNCTION
 * hona chahiye (const fn = () => ...). Regular function declarations
 * mat use karna — arrow functions ki practice karna hai!
 *
 * Functions (sab arrow functions honge):
 *
 *   1. calcStrikeRate(runs, balls)
 *      - Strike rate = (runs / balls) * 100, rounded to 2 decimal places
 *      - Agar balls <= 0 ya runs < 0, return 0
 *
 *   2. calcEconomy(runsConceded, overs)
 *      - Economy = runsConceded / overs, rounded to 2 decimal places
 *      - Agar overs <= 0 ya runsConceded < 0, return 0
 *
 *   3. calcBattingAvg(totalRuns, innings, notOuts = 0)
 *      - Batting avg = totalRuns / (innings - notOuts), rounded to 2 decimal places
 *      - Default notOuts = 0
 *      - Agar innings - notOuts <= 0, return 0
 *
 *   4. isAllRounder(battingAvg, economy)
 *      - Return true agar battingAvg > 30 AND economy < 8
 *
 *   5. getPlayerCard(player)
 *      - player object: { name, runs, balls, totalRuns, innings, notOuts, runsConceded, overs }
 *      - Return: { name, strikeRate, economy, battingAvg, isAllRounder }
 *      - Use the above functions internally
 *      - Agar player null/undefined hai ya name missing, return null
 *
 * Hint: Use const fn = (params) => expression or const fn = (params) => { ... }
 *
 * @example
 *   calcStrikeRate(45, 30)  // => 150
 *   calcEconomy(24, 4)      // => 6
 *   getPlayerCard({ name: "Jadeja", runs: 35, balls: 20, totalRuns: 2000, innings: 80, notOuts: 10, runsConceded: 1500, overs: 200 })
 *   // => { name: "Jadeja", strikeRate: 175, economy: 7.5, battingAvg: 28.57, isAllRounder: false }
 */
export const calcStrikeRate = (runs, balls) => {
  // Your code here
  if(runs < 0 || balls <= 0 ){
    return 0
  }

 let rate = (runs ,balls) => {
   let calculate =  runs / balls * 100
   let strikeRate = parseFloat(calculate).toFixed(2)
   let numStrikeRate = Number(strikeRate)
   return numStrikeRate
  }

 return rate(runs , balls)
};

export const calcEconomy = (runsConceded, overs) => {
  // Your code here
  if(runsConceded < 0 || overs <= 0){
    return 0
  }

  let economyCalArrFn = (runsConceded , overs) => {
    let calEco = runsConceded / overs
    let economyFloat = parseFloat(calEco.toFixed(2))
    let economy = Number(economyFloat)

    return economy
  }
  return economyCalArrFn(runsConceded , overs)
};

export const calcBattingAvg = (totalRuns, innings, notOuts = 0) => {
  // Your code here
  let inningConversion = innings - notOuts 

  if(inningConversion <= 0 ){
    return 0 
  }
  
  let calculateAvg = (totalRuns , innings , notOuts) => {
    let avgCal = totalRuns / (innings - notOuts)

    let BattingAvg = Number(parseFloat(avgCal.toFixed(2)))

    return BattingAvg
  }
  return calculateAvg(totalRuns , innings , notOuts)
};

export const isAllRounder = (battingAvg, economy) => {
  // Your code here
  if(battingAvg > 30 && economy < 8 ){
    return true
  }
  else {
    return false
  }
};

export const getPlayerCard = (player) => {
  // Your code here
 if(!player ||   !player.name){
    return null
  }
  const playerRuns = player.runs

  const playerTotalRuns = player.totalRuns ;
  const totalBallPlayed = player.balls;
  const playersTotalInnings = player.innings;
  const playerNotOut = player.notOuts;
  const playerRunConceded = player.runsConceded;
  const totalOvers = player.overs

    let name = player.name

    let strikeRate = Number(parseFloat(playerRuns / totalBallPlayed * 100).toFixed(2))

    let economy = Number(parseFloat(playerRunConceded / totalOvers).toFixed(2))

    let battingAvg = Number(parseFloat(playerTotalRuns / (playersTotalInnings - playerNotOut)).toFixed(2));

    let isAllRounder 
    if(battingAvg > 30 && economy < 8){
      isAllRounder = true
    }
    else{
      isAllRounder = false
    }
    return {name , strikeRate , economy , battingAvg , isAllRounder}
  }




console.log(calcStrikeRate(45, 30));

console.log(calcEconomy(35,2));

console.log(calcBattingAvg(140 ,4 , 1));

console.log(isAllRounder(43,2));

console.log(getPlayerCard({ name: "Jadeja", runs: 35, balls: 20, totalRuns: 2000, innings: 80, notOuts: 10, runsConceded: 1500, overs: 200 }))