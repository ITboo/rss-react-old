import { useGetCharactersQuery } from "../../app/redux/api/api";
import { useAppSelector } from "../../app/redux/hooks/hooks";

import Card from "../../components/Card/Card";
import Details from "../../components/Details/Details";
import DetailsCard from "../../components/Details/DetailsCard";
import Search from "../../components/Search/Search";
import Loader from "../../shared/Loader/Loader";

import { Character } from "../../app/types/types";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLoader } from "../../app/redux/slices/loaderSlice";

function HomePage() {
  const searchValue = useAppSelector((state) => state.search.value);
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const showLoader = useAppSelector((state) => state.loader.searchLoader);

  const {
    currentData = [],
    isFetching,
    isError,
  } = useGetCharactersQuery(searchValue);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isFetching) {
      dispatch(setLoader({ loader: "search", value: true }));
    } else {
      dispatch(setLoader({ loader: "search", value: false }));
    }
  }, [dispatch, isFetching]);

  return (
    <main>
      <Search />
      {isError ? (
        <div>...</div>
      ) : (
        <section className="cards">
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
      {showLoader && <Loader />}
    </main>
  );
}

export default HomePage;
