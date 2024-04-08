"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function StarWarsCharacter() {
  const [character, setCharacter] = useState({});
  const [character2, setCharacter2] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacter(num, setCharacter) {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${num}`);
        setCharacter(response.data);
      } catch (error) {
        setError("something went wrong");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCharacter(1, setCharacter);
    fetchCharacter(2, setCharacter2);
    // fetchCharacter(3, setCharacter);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h1>{character.name}</h1>
        <p>Height: {character.height}</p>
        <p>Mass: {character.mass}</p>
        <p>Hair Color: {character.hair_color}</p>
      </div>

      <div>
        <h1>{character2.name}</h1>
        <p>Height: {character.height}</p>
        <p>Mass: {character.mass}</p>
        <p>Hair Color: {character.hair_color}</p>
      </div>
    </>
  );
}


