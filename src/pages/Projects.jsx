//This is the project page, contains the card component//
import LetsTalk from "../components/LetsTalk";
import Card from "../components/Card";


export default function Projects() {

  return (
    <main className="ProjectsPage">

      <section className="Content container">
        <h2 className="title-section">
          My Projects<span className="text-orange">.</span>
        </h2>
        <div className="gallery">
          <Card title="Ux Case Study <br> RIMAC insurances" image="/img/Cover.png" link="#" tag="UX / UI Design" />
          <Card title="Ux Case Study <br> RIMAC insurances" image="/img/Cover.png" link="#" tag="UX / UI Design" />
          <Card title="Ux Case Study <br> RIMAC insurances" image="/img/Cover.png" link="#" tag="UX / UI Design" />
          <Card title="Ux Case Study <br> RIMAC insurances" image="/img/Cover.png" link="#" tag="UX / UI Design" />
          <Card title="Ux Case Study <br> RIMAC insurances" image="/img/Cover.png" link="#" tag="UX / UI Design" />
          <Card title="Ux Case Study <br> RIMAC insurances" image="/img/Cover.png" link="#" tag="UX / UI Design" />
          <Card title="Ux Case Study <br> RIMAC insurances" image="/img/Cover.png" link="#" tag="UX / UI Design" />
          <Card title="Ux Case Study <br> RIMAC insurances" image="/img/Cover.png" link="#" tag="UX / UI Design" />
        </div>
      </section>


      <div className="spacer" />

      <LetsTalk />
    </main>
  );
}