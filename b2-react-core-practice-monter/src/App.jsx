import { useEffect, useState } from "react";
import { DRAW, MONSTER, PLAYER } from "./constants/gameOverState";

import "./App.css";

const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const App = () => {
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [playerHealth, setPlayerHealth] = useState(100);
  const [winner, setWinner] = useState(null);
  const [round, setRound] = useState(1);
  const [logMessages, setLogMessages] = useState([]);

  // Win:  monsterHealth <= 0 (Computed)
  // Lose: playerHealth <= 0
  // Draw: monsterHealth <= 0 && playerHealth <= 0 (Watcher)

  useEffect(() => {
    if (monsterHealth <= 0 && playerHealth > 0) setWinner(PLAYER);
    else if (monsterHealth > 0 && playerHealth <= 0) setWinner(MONSTER);
    else if (monsterHealth <= 0 && playerHealth <= 0) setWinner(DRAW);
  }, [monsterHealth, playerHealth]);

  // UI
  const gameOverOrControlComponent = () =>
    winner ? (
      <div className="container">
        <h2>Game Over!</h2>
        {winner === PLAYER && <h3>You won!</h3>}
        {winner === MONSTER && <h3>You lose!</h3>}
        {winner === DRAW && <h3>It's draw!</h3>}
        <button onClick={handleStartNewGame}>Start new game!</button>
      </div>
    ) : (
      <section id="controls">
        <button onClick={handleAttackMonster}>ATTACK</button>
        <button disabled={round % 3 !== 0} onClick={handleSpecialAttack}>
          SPECIAL ATTACK
        </button>
        <button disabled={round === 1} onClick={handleHeal}>
          HEAL
        </button>
        <button onClick={() => setWinner(MONSTER)}>SURRENDER</button>
      </section>
    );

  //Styles
  const monsterStyles = {
    width: `${monsterHealth <= 0 ? 0 : monsterHealth}%`,
    color: monsterHealth <= 0 && "transparent",
  };

  const playerStyles = {
    width: `${playerHealth <= 0 ? 0 : playerHealth}%`,
    color: playerHealth <= 0 && "transparent",
  };

  // Methods
  const attackPlayer = () => {
    const attackValue = getRandomValue(8, 15);
    setPlayerHealth((prev) => prev - attackValue);

    addLogMessage(MONSTER, "attack", attackValue);
  };

  const handleAttackMonster = () => {
    setRound((prev) => ++prev);
    const attackValue = getRandomValue(5, 10);
    setMonsterHealth((prev) => prev - attackValue);

    addLogMessage(PLAYER, "attack", attackValue);
    attackPlayer();
  };

  const handleSpecialAttack = () => {
    setRound((prev) => ++prev);
    const attackValue = getRandomValue(10, 25);
    setMonsterHealth((prev) => prev - attackValue);
    addLogMessage(PLAYER, "use special attack", attackValue);

    attackPlayer();
  };

  const handleHeal = () => {
    setRound((prev) => ++prev);
    const healValue = getRandomValue(8, 15);
    if (playerHealth + healValue >= 100) setPlayerHealth(100);
    else setPlayerHealth((prev) => prev + healValue);

    addLogMessage(PLAYER, "heal", healValue);
    attackPlayer();
  };

  const handleStartNewGame = () => {
    setRound(1);
    setPlayerHealth(100);
    setMonsterHealth(100);
    setWinner(null);
    setLogMessages([]);
  };

  const addLogMessage = (who, action, value) => {
    const logMessage = {
      actionBy: who,
      actionType: action,
      actionValue: value,
    };

    logMessages.unshift(logMessage);
  };

  return (
    <div className="App">
      <header>
        <h1>Monster Slayer</h1>
      </header>
      <div id="game">
        <session className="container">
          <h2>Round {round}</h2>
        </session>

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

        {gameOverOrControlComponent()}

        <section id="log" class="container">
          <h2>Battle Log</h2>
          <ul>
            {logMessages.map((log, idx) => (
              <li key={idx}>
                <span
                  className={`${
                    log.actionBy === PLAYER ? "log--player" : "log--monster"
                  }`}
                  style={{ textTransform: "capitalize" }}
                >
                  {log.actionBy}
                </span>
                &nbsp;
                {log.actionType === "heal" ? (
                  <>
                    <span>heals your self for</span>&nbsp;
                    <span className="log--heal">{log.actionValue}</span>
                  </>
                ) : (
                  <>
                    <span>{log.actionType} and deals</span>&nbsp;
                    <span className="log--damage">{log.actionValue}</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default App;