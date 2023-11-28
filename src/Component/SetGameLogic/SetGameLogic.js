import React, { useState,useContext,useEffect } from 'react';
import styles from './SetGameLogic.module.css';
import { useLocation } from 'react-router-dom';
import offerContext from '../../context/offerContext'

const SetGameLogic = () => {
  const [selectedMode, setSelectedMode] = useState('Client');

  const handleModeChange = (event) => {

    setSelectedMode(event.target.value);
  };

  let location = useLocation();
  let gameName = location.search.split("=")[1]
  console.log("Location ",location,gameName)

  const context = useContext(offerContext)
  console.log("Contect ",context)
  const { GameLogicSet } = context


  const handleSubmit = async () => {
   let res = await  GameLogicSet({
        "game":gameName,
        "gamelogic":selectedMode
    })
    console.log("REs :::::::::::::::::::::",res)
    if(res.falgs == true){
      alert("Success Save")
    }
    console.log(selectedMode);
  };


  
  

  return (
    <div className={styles.container}>
      <h2>Set Game Logic:</h2>
      <div className={styles.radioGroup}>
        <div className={styles.radioOption}>
          <input
            type="radio"
            id="noOneWillWin"
            name="gameMode"
            value="Client"
            checked={selectedMode === 'Client'}
            onChange={handleModeChange}
          />
          <label htmlFor="noOneWillWin">Client Will Win</label>
        </div>
        <div className={styles.radioOption}>
          <input
            type="radio"
            id="List Will Win"
            name="gameMode"
            value="User"
            checked={selectedMode === 'User'}
            onChange={handleModeChange}
          />
          <label htmlFor="List Will Win">User Will Win</label>
        </div>
        <div className={styles.radioOption}>
          <input
            type="radio"
            id="normalgame"
            name="gameMode"
            value="Normal"
            checked={selectedMode === 'Normal'}
            onChange={handleModeChange}
          />
          <label htmlFor="normalgame">Normal Game</label>
        </div>
      </div>
      <button className={styles.submitButton} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default SetGameLogic;
