import { useEffect, useState } from "react";

import Search from "../../components/Search/Search";
import CardList from "../../components/CardList/CardList";

import { Character, CharacterData } from "../../app/types/types";

import { API_URL } from "../../app/constants/constants";
import Pagination from "../../components/Pagination/Pagination";

function HomePage() {
  const [search, setSearch] = useState(
    localStorage.getItem("searchValue") ?? "",
  );
  const [data, setData] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState<number>(6);

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

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  return (
    <main className="main">
      <Search setSearch={setSearch} />
      <CardList data={currentPosts} />
      <Pagination
        totalPosts={data.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
}

export default HomePage;
