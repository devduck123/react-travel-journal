import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  let cards = data.map((card) => <Card key={card.id} card={card} />);

  return (
    <div className="page">
      <Header />
      <section className="card-wrapper">{cards}</section>
    </div>
  );
}
