import React from 'react';
import './style.css';
import { useDrag } from "react-dnd";

export default function Player({item, playerType, onDropPlayer, id}) {
  const [{ isDragging }, dragRef] = useDrag({
    type: playerType,
    item: () => ({ ...item, id }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        onDropPlayer(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div className="player" ref={dragRef}>
      {item.name}
    </div>
  )
}
