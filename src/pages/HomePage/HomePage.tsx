import { useEffect, useState } from "react";

import Search from "../../components/Search/Search";
import CardList from "../../components/CardList/CardList";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../shared/Loader/Loader";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

import { Character, CharacterData } from "../../app/types/types";

import { API_URL } from "../../app/constants/constants";

import Details from "../../components/Details/Details";
import DetailsInfo from "../../components/Details/DetailsInfo";

function HomePage() {
  const [search, setSearch] = useState(
    localStorage.getItem("searchValue") ?? "",
  );
  const [data, setData] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState<number>(6);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalId, setModalId] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_URL}/?name=${search}`);
        const { results }: CharacterData = await res.json();
        results ? setData(results) : setData([]);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    })();
  }, [search]);

  const openModal = (id: number) => {
    setIsModalOpen(true);
    setModalId(id);
  };

  const setModal = () => setIsModalOpen(false);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  return (
    <main className="main">
      <Search setSearch={setSearch} />
      {isLoading ? (
        <Loader />
      ) : data.length === 0 ? (
        <NotFoundPage />
      ) : (
        <CardList data={currentPosts} openModal={openModal} />
      )}
      <Pagination
        totalPosts={data.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {isModalOpen && (
        <Details setModal={setModal}>
          <DetailsInfo setModal={setModal} cardId={modalId} />
        </Details>
      )}
    </main>
  );
}

export default HomePage;
