import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PokemonCard = ({ name, url }) => {
  const id = url.split("/")[6].padStart(3, "0");
  const colors = ["#FF5959", "#3B4CCA", "#78C850", "#FFD733", "#F85888"];
  const bgColor = colors[id % colors.length];

  return (
    <div
      className="card text-center shadow-lg rounded-5 m-3 pokemon-card flex-fill"
      style={{
        backgroundColor: bgColor,
        color: "white",
        minWidth: "250px",
        minHeight: "350px",
        transition: "transform 0.3s",
      }}
    >
      <a
        href={`https://www.pokemon.com/es/pokedex/${name}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="card-img-top mx-auto mt-4"
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}
          alt={name}
          style={{
            width: "180px",
            height: "180px",
            transition: "transform 0.3s",
          }}
        />
      </a>
      <div className="card-body">
        <h4 className="card-title text-capitalize fw-bold fs-4">{name}</h4>
      </div>
      <style jsx>{`
        .pokemon-card:hover img {
          transform: scale(1.2);
        }
        .pokemon-card:hover {
          transform: translateY(-8px) scale(1.03);
        }
      `}</style>
    </div>
  );
};

export default PokemonCard;
