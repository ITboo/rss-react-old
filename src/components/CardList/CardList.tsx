import { Character, CharactersProps } from "../../app/types/types";
import Card from "../Card/Card";

function CardsList({ data, openModal }: CharactersProps) {
  return (
    <div className="cards">
      {data.map((item: Character) => (
        <Card key={item.id} data={item} openModal={openModal} />
      ))}
    </div>
  );
}

export default CardsList;
