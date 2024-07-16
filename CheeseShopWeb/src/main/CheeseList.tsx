
import cheese from "./cheese";

type CheeseListProps = {
    cheeses: cheese[];
};

// TODO: change to a table and add more cheese fields
function CheeseList({ cheeses }: CheeseListProps) {
    return (
        <div>
            <h2>Cheese List</h2>
            <ul>
              {cheeses.map((cheeseItem) => (
                <li key={cheeseItem.id}>{cheeseItem.name}</li>
              ))}
            </ul>
        </div>
    );
}

export default CheeseList;