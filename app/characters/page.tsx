/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Card from "@/components/card/Card";
import Loading from "@/components/loading/Loading";
import Search from "@/components/search/Search";
import logo from "@/public/assets/logo.png";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./style.css";

const Pagination = dynamic(() => import("@/components/pagination/Pagination"), {
  ssr: false,
});

const HomePage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [loading, setLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState({
    info: { pages: 0, count: "" },
    results: [],
  });
  const [search, setSearch] = useState("");
  const { info, results } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    setLoading(true);
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setFetchedData(data);
        setLoading(false);
      });
  }, [api]);

  return (
    <main className="main">
      <div className="container">
        <div>
          <div>
            <Search setSearch={setSearch} setPageNumber={setPageNumber} />
            <div className="info">
              <span className="info-count">
                {info && info.count ? <>{info.count}</> : "0"}{" "}
              </span>
              <span className="info-text"> Characters</span>
            </div>
          </div>
          <div>
            <div>
              <div className="result">
                {loading ? (
                  <div className="loader">
                    <Loading />
                  </div>
                ) : (
                  <Card results={results} />
                )}
              </div>
              <Pagination
                info={info}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
