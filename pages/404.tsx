import Head from "next/head";
import Link from "next/link";
import React from "react";
import "../styles/404.css";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 (Not Found)</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="" />
      </Head>
      <div className="page">
        <div>
          <span>Ooops!</span>
        </div>
        <p>
          The page you are trying to search has been <br /> moved to another
          universe.
        </p>
        <Link href="/">
          <button type="button">GET ME HOME</button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
