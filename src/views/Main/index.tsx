import { useState } from "react";

import Search from "../../components/Search";
import CharacterCards from "../../components/Cards";
import Loading from "../../components/Loading";

import logo from "../../assets/imgs/rick_morty_logo.png";

import charactersRepository from "../../repositories/characters";

import { ICharacters } from "../../interfaces/interfaces";

import "./styles.css";

const Main = () => {
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState<any>({} as ICharacters);
  const [isCharactersListed, setIsCharactersListed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getCharacters = async () => {
    setIsLoading(true);

    try {
      const response = await charactersRepository.getCharacters(search);

      if (!!response?.data.characters.results) {
        setCharacters(response?.data.characters?.results);
      } else {
        return alert("There are no characters!");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsCharactersListed(true);
      setIsLoading(false);
    }
  };

  return (
    <main className="home">
      <div className="home-search-component">
        <img
          src={logo}
          className="home-logo-img"
          alt="Logotipo da animação Rick and Morty"
        />
        <Search
          onSubmit={() => getCharacters()}
          search={(value) => setSearch(value)}
        />
      </div>
      <div className="character-component" data-testid="character-component">
        {isCharactersListed && <CharacterCards characters={characters} />}
      </div>
      {isLoading && <Loading />}
    </main>
  );
};
export default Main;
