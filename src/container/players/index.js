import React, {useState} from 'react';
import { useDrop } from "react-dnd";
import {Player} from '../../components';
import './style.css'

export default function Players() {

  const [playerData, setPlayerData] = useState([{name:"Task1"}, {name:"Task2"}, {name:"Task3"}, {name:"Task4"}]);
  const [teamData, setTeamData] = useState([]);

  const [{ isOver }, addToTeamRef] = useDrop({
    accept: "player",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const [{ isOver: isPlayerOver }, removeFromTeamRef] = useDrop({
    accept: "team",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const movePlayerToTeam = (item) => {
    console.log(item);
    setPlayerData((prev) => prev.filter((_, i) => item.id !== i));
    setTeamData((prev) => [...prev, item]);
  };
  const removePlayerFromTeam = (item) => {
    console.log(item);
    setTeamData((prev) => prev.filter((_, i) => item.id !== i));
    setPlayerData((prev) => [...prev, item]);
  };
  return (
    <>
    <div  className="players" ref={removeFromTeamRef}>
      <div className="players__container"  >
          {playerData.map((player,id) =>{
            return <Player key={id} id={id} item={player} playerType="player" onDropPlayer={movePlayerToTeam }/>
          })}
      </div>
    </div>

    <div  className="team" ref={addToTeamRef}>
      <div className="team__container" >
          {teamData.map((player,id) =>{
            return <Player key={id} id={id} item={player} playerType="team" onDropPlayer={removePlayerFromTeam }/>
          })}
      </div>
    </div>
    </>
  )
}
