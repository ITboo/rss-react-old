import { useGetCharactersQuery } from "../../app/redux/api/api";
import { useAppSelector } from "../../app/redux/hooks/hooks";

import Card from "../../components/Card/Card";
import Details from "../../components/Details/Details";
import DetailsCard from "../../components/Details/DetailsCard";
import Search from "../../components/Search/Search";
import Loader from "../../shared/Loader/Loader";

import { Character } from "../../app/types/types";

function HomePage() {
  const searchValue = useAppSelector((state) => state.search.value);
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const {
    currentData = [],
    isFetching,
    isError,
  } = useGetCharactersQuery(searchValue);

  return (
    <main>
      <Search />
      {isFetching ? (
        <Loader />
      ) : isError ? (
        <div>...</div>
      ) : (
        <section>
          {currentData.map((card: Character) => (
            <Card key={card.id} data={card} />
          ))}
        </section>
      )}
      {isModalOpen && (
        <Details>
          <DetailsCard />
        </Details>
      )}
    </main>
  );
}

export default HomePage;
