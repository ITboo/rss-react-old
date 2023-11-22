import { useParams } from "react-router";
import { Outlet } from "react-router-dom";

import Search from "../../components/Search/Search";
import CardList from "../../components/CardList/CardList";
import Details from "../../components/Details/Details";

const MainPage = () => {
  const { characterId } = useParams();

  return (
    <>
      <main>
        <Search />
        <CardList />
      </main>
      {characterId ? <Details /> : null}
      <Outlet />
    </>
  );
};

export default MainPage;
