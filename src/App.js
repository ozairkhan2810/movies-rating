import React from "react";
import "./styles.css";
import { useState } from "react";

const moviesDB = {
  hollywood: [
    { name: "The Shawshank Redemption", rating: "9.2" },
    { name: "The Godfather", rating: "9.1" }
  ],

  bollywood: [
    {
      name: "Shershaah",
      rating: "8.8"
    },
    {
      name: "Black Friday",
      rating: "8.5"
    }
  ],
  anime: [
    {
      name: "Fullmetal Alchemist: Brotherhood",
      rating: "9.1"
    },
    {
      name: "Attack on Titan",
      rating: "9.0"
    }
  ]
};

export default function App() {
  const [selectedTypeOfMovie, setTypeOfMovie] = useState("hollywood");
  function typeOfMovieClickHandler(typeOfMovie) {
    setTypeOfMovie(typeOfMovie);
  }
  return (
    <div className="App">
      <h1>
        {" "}
        Highest{" "}
        <span
          style={{
            backgroundColor: "yellow",
            padding: "0.3rem"
          }}
        >
          IMDb
        </span>{" "}
        Ratings{" "}
      </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout IMDb ratings. Select from list available to get started{" "}
      </p>

      <div>
        {Object.keys(moviesDB).map((typeOfMovie) => (
          <button
            key={typeOfMovie}
            onClick={() => typeOfMovieClickHandler(typeOfMovie)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {typeOfMovie}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left", margin: "auto" }}>
        {
          <ul style={{ paddingInlineStart: "0", textAlign: "center" }}>
            {moviesDB[selectedTypeOfMovie].map((movie) => {
              return (
                <li
                  key={movie.name}
                  style={{
                    listStyle: "none",
                    textAlign: "center",
                    padding: "1rem",
                    border: "1px solid #888",
                    width: "70%",
                    margin: "2rem auto",
                    borderRadius: "0.5rem"
                  }}
                >
                  {" "}
                  <div style={{ fontSize: "larger" }}> {movie.name} </div>
                  <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
                </li>
              );
            })}
          </ul>
        }
      </div>
    </div>
  );
}
