import Arrow from "./Arrow";
import Visit from "./Visit";
import up from "../assets/svg/button-back.svg";
import { Link } from "react-router-dom";

export default function LetsTalk() {

  return (
    <section className="LetsTalk container">
      <div className="lets-talk-text">
        <h3 className="title-section">
          <span className="font-rainbow text-trans-initial">Let’s talk</span> about the next big thing
        </h3>

        <p className="description-section">
          If you have other requests or questions about projects, don’t hesitate to email me at <span className="font-bold">hi@valdurdesign.com</span> or send me a message.
        </p>

        <div className="button-container">
          <Link to="/contact-me" className="main-button">Send a message</Link>
        </div>
      </div>
      <Arrow v2 />
      <Visit />

      <div className="button-back" role='button'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img src={up} alt="Back" />
      </div>
    </section>
  )
}
