import "./AboutPage.css";

function AboutPage() {
  return (
    <main className="about">
      <p className="about__text">
        The series follows the misadventures of alcoholic scientist Rick and his
        overly nervous grandson Morty, who split their time between domestic
        family life and intergalactic travel. Often finding themselves in a heap
        of trouble that more often than not created through their own actions,
        these two will get themselves out of trouble in the most entertaining
        way! This extremely clever show will blow your mind as well as all other
        parallel realities of your mind!
      </p>
      <img
        src="../../../public/img.jpg"
        alt="about"
        className="about__img"
        width="350px"
      />
    </main>
  );
}

export default AboutPage;
