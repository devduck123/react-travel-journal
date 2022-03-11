// import pin from "https://img.icons8.com/office/30/000000/worldwide-location--v2.png";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card-image" src={props.card.img} alt="scenery/views" />
      <section className="card-info">
        <img
          className="pin"
          src="https://img.icons8.com/office/30/000000/worldwide-location--v2.png"
          alt="location pin"
        />
        <span className="card-location">{props.card.location}</span>
        <a
          className="card-maps"
          href={props.card.maps}
          target="_blank"
          rel="noreferrer"
        >
          View on Google Maps
        </a>
        <h1 className="card-title">{props.card.title}</h1>
        <span className="card-date">
          {props.card.startdate} - {props.card.enddate}
        </span>
        <p className="card-description">{props.card.description}</p>
      </section>
    </div>
  );
}
