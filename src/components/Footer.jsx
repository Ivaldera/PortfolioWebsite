// The footer will appear in every page of this website //

export default function Footer() {
  return (
    <footer className="Footer">
      <section className="container">
        <small>&copy; {(new Date().getFullYear())} Designed and built by Ingrid Valdera Urday.</small>
      </section>
    </footer>
  );
}