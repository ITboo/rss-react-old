import { Character, CharactersProps } from "../../app/types/types";
import Card from "../Card/Card";

function CardsList({ data }: CharactersProps) {
  return (
    <section className="cards">
      {data.map((item: Character) => (
        <Card key={item.id} data={item} />
      ))}
    </section>
  );
}

export default CardsList;
