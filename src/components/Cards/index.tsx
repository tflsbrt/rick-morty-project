import { useState } from "react";

import CharacterModal from "../Modal";
import { ICharacter } from "../../interfaces/interfaces";

import "./styles.css";

interface Props {
  characters: [];
}

const Cards: React.FC<Props> = ({ characters }) => {
  const [openCharacterDetails, setOpenCharacterDetails] = useState(false);
  const [characterInfo, setCharacterInfo] = useState({});

  function handleOpenCharacterDetailsModal(info: any) {
    setCharacterInfo(info);
    setOpenCharacterDetails(true);
  }

  return (
    <section className="parent">
      {characters.map((person: ICharacter, index: any) => (
        <div
          className={`card ${
            person.status === "Alive" ? "" : "card-dead-char"
          }`}
          style={{ background: `url(${person.image}) center / cover no-repeat`}}
          key={person.name}
          onClick={() => handleOpenCharacterDetailsModal(person)}
        >
          <div className="container">
            <h4>{person.name}</h4>
            <p>{person.species}</p>
          </div>
        </div>
      ))}
      {openCharacterDetails && (
        <CharacterModal
          id={'modal'}
          details={characterInfo}
          onClose={() => setOpenCharacterDetails(false)}
        />
      )}
    </section>
  );
};

export default Cards;
