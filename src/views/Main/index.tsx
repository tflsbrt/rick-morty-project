import { useState, useEffect } from "react";

import Search from "../../components/Search";
import CharacterCards from "../../components/Cards";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";

import logo from "../../assets/imgs/rick_morty_logo.png";

import charactersRepository from "../../repositories/characters";

import { ICharacters, IInfo } from "../../interfaces/interfaces";

import "./styles.css";

const Main = () => {
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState<any>({} as ICharacters);
  const [isCharactersListed, setIsCharactersListed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [info, setInfo] = useState<any>({} as IInfo)

  useEffect(() => {
    if(offset > 1) getCharacters() 
  }, [offset])

  const getCharacters = async () => {
    setIsLoading(true);

    try {
      const response = await charactersRepository.getCharacters(search, offset);
    
      if (!!response?.data.characters.results) {
        setCharacters(response?.data.characters?.results);
        setIsCharactersListed(true);
        setInfo(response?.data.characters?.info)
      } else {
        return alert("There are no characters!");
      }
    } catch (err) {
      console.log(err);
      return alert("An error ocurred while processing the search. Please, try again");
    } finally {
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
      {isCharactersListed &&
        <Pagination
          limit={1}
          total={671}
          offset={offset}
          setOffset={(value) => setOffset(value)}
        />    
      }
      {isLoading && <Loading />}
    </main>
  );
};
export default Main;
