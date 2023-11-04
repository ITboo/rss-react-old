import { Character, CharactersProps } from "../../app/types/types";
import Card from "../Card/Card";

function CardsList(data: CharactersProps) {
  return (
    <div className="card-list">
      {data.map((item: Character) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}

export default CardsList;
