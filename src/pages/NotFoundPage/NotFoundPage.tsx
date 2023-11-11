import "./NotFoundPage.css";
function NotFoundPage() {
  return (
    <main className="main not-found">
      <h2 className="">Ooops, sorry! Nothing is found...</h2>
      <img
        className="not-found__img"
        src="../../../public/notFound.png"
        alt="404"
        width="450px"
      />
    </main>
  );
}

export default NotFoundPage;
