import globe from "../images/globe.png";

export default function Header() {
  return (
    <header>
      <nav>
        <img src={globe} alt="globe" />
        <h1>Travel Journal</h1>
      </nav>
    </header>
  );
}
