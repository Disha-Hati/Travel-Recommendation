import React, { useState } from "react";
import "./styles.css";

const travel = {
  Hills: [
    { location: "Tawang", rating: "4.8/5" },
    { location: "Nainital", rating: "4.5/5" },
    { location: "Manali", rating: "4/5" },
    { location: "Aizwal", rating: "3.9/5" },
    { location: "Gangtok", rating: "3.7/5" },
    { location: "Pahalgam", rating: "4.2/5" }
  ],
  Beach: [
    { location: "Andaman", rating: "4.9/5" },
    { location: "Goa", rating: "4.1/5" },
    { location: "Lakshwadeep", rating: "4.8/5" },
    { location: "Puri", rating: "4.2/5" },
    { location: "Kovalam", rating: "4/5" },
    { location: "Kashid", rating: "3.9/5" }
  ],
  Forest: [
    { location: "Sunderbans", rating: "4.5/5" },
    { location: "Gir Forest", rating: "4.1/5" },
    { location: "Bandipur", rating: "4/5" },
    { location: "Kaziranga", rating: "4.2/5" },
    { location: "Jim Corbett", rating: "4.3/5" }
  ]
};

export default function App() {
  const [selectedTheme, setTheme] = useState("Hills");
  function genreClickHandler(theme) {
    setTheme(theme);
  }

  return (
    <div className="App">
      <h1>Let's Travel ✈️</h1>
      <h2>
        🎑Checkout my Travel Reccomendation.Select the type of place to get
        started.🎑
      </h2>

      <div>
        {Object.keys(travel).map((theme) => (
          <button onClick={() => genreClickHandler(theme)} className="btn">
            {theme}
          </button>
        ))}
      </div>

      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {travel[selectedTheme].map((place) => (
            <li
              key={place.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {place.location} </div>
              <div style={{ fontSize: "smaller" }}> {place.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
