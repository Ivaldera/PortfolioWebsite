//This is the about page//
import { Link } from "react-router-dom";
import Tools from "../components/Tools";
import LetsTalk from "../components/LetsTalk";
import Experience from "../components/Experience";

export default function About() {


  return (
    <main className="AboutPage">

      <section className="About container">
        <div className="image">
          <img className="photo" src="/img/AboutMe.png" alt="About me" />
        </div>

        <div className="about-text">
          <h2 className="title-section">
            About me<span className="text-orange">.</span>
          </h2>

          <p className="description-section text-justify">
            With more than 5 years of experience, with a strong background in digital products. I am dedicated to working closely with clients to understand their needs and preferences, and I am always open to feedback to ensure that the end result is a product that exceeds expectations. Whether it's a website, mobile app, or physical product, I am confident in my ability to create designs that make a lasting impact.
          </p>

          <Tools customClass="paddings" />

          <Link className="main-button" to="/contact-me">
            Send a message
          </Link>
        </div>
      </section>

      <Experience />

      <div className="spacer" />

      <LetsTalk />
    </main>
  );
}