import React from "react";
import Cheese from "../Types/Cheese";
import defaultPhoto from "../Assets/defaultCheese.png"
import DeleteButton from "./DeleteButton";

interface CheeseListProps {
  cheeses: Cheese[];
  onCheeseDeleted: () => void;
}

// TODO: Style better and include photos
function CheeseList({ cheeses, onCheeseDeleted }: CheeseListProps) {
  return (
    <div className="cheese-list">
      <h2>Cheese List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price Per Kilo</th>
            <th>Colour</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {cheeses &&
            cheeses.map((cheeseItem: Cheese) => (
              <tr key={cheeseItem.id}>
                <td>{cheeseItem.name}</td>
                <td>${cheeseItem.pricePerKilo}</td>
                <td>{cheeseItem.colour}</td>
                <td><img src={defaultPhoto} alt={cheeseItem.name} style={{maxWidth: '128px'}}/></td>
                <td><DeleteButton cheeseId ={cheeseItem.id} onCheeseDeleted={onCheeseDeleted}/></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default CheeseList;