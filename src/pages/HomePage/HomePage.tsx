import { useEffect, useState } from "react";

import Search from "../../components/Search/Search";
import CardList from "../../components/CardList/CardList";

import { Character, CharacterData } from "../../app/types/types";

import { API_URL } from "../../app/constants/constants";

function HomePage() {
  const [search, setSearch] = useState(
    localStorage.getItem("searchValue") ?? "",
  );
  const [data, setData] = useState<Character[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_URL}/?name=${search}`);
        const { results }: CharacterData = await res.json();
        results ? setData(results) : setData([]);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [search]);

  return (
    <main className="main">
      <Search setSearch={setSearch} />
      <CardList data={data} />
    </main>
  );
}

export default HomePage;
