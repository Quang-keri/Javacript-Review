
import './App.css';
import { useEffect, useState } from 'react';
import { PLAYER,MONSTER,DRAW} from './constants/whowin.js';


function App() {
  const [monsterHealth,setMonsterHealth]=useState(100);
const [playerHealth,setPlayerHealth]=useState(100);
const [round,setRound]=useState(1);
const [winner,setWinner]=useState(null);
  
  useEffect(() => {
    if (monsterHealth <= 0 && playerHealth > 0) setWinner(PLAYER);
    else if (monsterHealth > 0 && playerHealth <= 0) setWinner(MONSTER);
    else if (monsterHealth <= 0 && playerHealth <= 0) setWinner(DRAW);
  }, [monsterHealth, playerHealth]);
//
const gameComponent = () => {
  if (winner) {
    return (
      <div>
        {winner === PLAYER && <h3>You won!</h3>}
        {winner === MONSTER && <h3>You lose!</h3>}
        {winner === DRAW && <h3>It's a draw!</h3>}
       
        {/* <button onClick={handleStartNewGame}>Start new game!</button> */}
      </div>
    );
  }
};
  //Styles
  const monsterStyles = {
    width: `${monsterHealth <= 0 ? 0 : monsterHealth}%`,
    color: monsterHealth <= 0 && "transparent",
  };
  const playerStyles= {
    width:`${playerHealth <= 0 ? 0 : playerHealth}%`,
    color:playerHealth <= 0 && "transparent",
  }

//random damage


const getDamage =(min,max)=>{
    return Math.floor(Math.random() * (max - min) + min);    
}

const attractPlayer= ()=>{
  const actrackValue1 = getDamage(10,15);
  setPlayerHealth((prev) => prev - actrackValue1);
}

const handleAttract = ()=>{
  const attrackValue= getDamage(8,15);
  console.log(attrackValue);
setMonsterHealth((prev) => prev - attrackValue);
 setRound((prev) => prev + 1); 
attractPlayer();
}

const handleSpecialAttrack= ()=>{
  const actionValue = getDamage(8,12);
  setRound((prev) => ++prev);
  console.log( "count " +round);
  setMonsterHealth((prev)=> prev - actionValue); 
}


  return (
  <div>
     <header>
      <h1>Monster Slayer</h1>
    </header>
    <div id="game">
      <section id="monster" class="container">
        <h2>Monster Health</h2>
        <div class="healthbar">
          <div class="healthbar__value" style={monsterStyles}></div>
        </div>
      </section>
      <section id="player" class="container">
        <h2>Your Health</h2>
        <div class="healthbar">
          <div class="healthbar__value" style={playerStyles}></div>
        </div>
      </section>

      <section id="controls" >
        <button onClick={handleAttract} disabled={monsterHealth <= 0  || playerHealth <= 0} >ATTACK</button>
        <button  disabled={round % 3 !== 0} onClick={handleSpecialAttrack}>SPECIAL ATTACK</button>
        <button  >HEAL</button>
        <button >SURRENDER</button>
      </section>
	  {gameComponent()}
      <section id="log" class="container">
        <h2>Battle Log</h2>
        <ul>
        </ul>
      </section>
    </div>
  </div>
  );
}

export default App;
