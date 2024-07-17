
import Cheese from "../types/cheese";

type CheeseListProps = {
  cheeses: Cheese[];
};

// TODO: Style better and include photos
function CheeseList({ cheeses }: CheeseListProps) {
  return (
    <div>
      <h2>Cheese List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price Per Kilo</th>
            <th>Colour</th>
          </tr>
        </thead>
        <tbody>
          {cheeses &&
            cheeses.map((cheeseItem: Cheese) => (
              <tr key={cheeseItem.id}>
                <td>{cheeseItem.name}</td>
                <td>${cheeseItem.pricePerKilo}</td>
                <td>{cheeseItem.colour}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default CheeseList;