import "./styles.css";

interface Props {
  id: string;
  details: any;
  onClose(): void;
}

const CharacterModal: React.FC<Props> = ({ id, details, onClose }) => {

  const AboutComponent = () => (
    <div className="detail-modal-info-about">
            <h3 className="detail-modal-info-title">ABOUT</h3>
            <p>
                {details.name} is a {details.gender.toLowerCase()} {details.species.toLowerCase()}.
                { details.gender === "Male"
                    ? " He"
                    : " She"
                }
                {details.status === "Alive" || "Dead"
                  ? details.status === "Alive"
                    ? " is alive and well. "
                    : " is dead. "
                  : " It can’t be told if he is alive or dead. "
                }
            Last seen in {details.episode[details.episode.length - 1].air_date}.
            </p>
          </div>
  )

  const OriginComponent = () => (
    <div className="detail-modal-info-origin">
      <h3 className="detail-modal-info-title">ORIGIN</h3>
      <span>
        {details.origin != null
          ? details.origin.name === "unknown"
            ? "Unknown planet"
            : "Planet"
          : "Unknown planet"}
      </span>
      {details.origin != null ? (
        <>
          <p className="planet-name">{details.origin.name}</p>
          <p className="planet-dimension">{details.origin.dimension}</p>
          <span id="residents">{details.origin.residents.length} residents</span>
        </>
      ) : (
        <>
          <p className="planet-name">Unknown</p>
          <p className="planet-dimension">Unknown dimension</p>
        </>
      )}
    </div>
  )

  const LocationComponent = () => ( 
    <div className="detail-modal-info-location">
      <h3 className="detail-modal-info-title">LOCATION</h3>
      <span className="">
        {details.location != null
          ? details.location.name === "unknown"
            ? "Unknown planet"
            : "Planet"
          : "Unknown planet"}
      </span>
      {details.origin != null ? (
        <>
          <p className="planet-name">{details.location.name}</p>
          <p className="planet-dimension">{details.location.dimension}</p>
          <span id="residents">{details.location.residents.length} residents</span>
        </>
      ) : (
        <>
          <p className="planet-name">Unknown</p>
          <p className="planet-dimension">Unknown dimension</p>
        </>
      )}
    </div>
  )

  return (
    <div id={id} className="detail-modal">
      <div
        className="detail-modal-image"
        style={{ backgroundImage: `url('${details.image}')` }}
      >
        <button onClick={onClose}>Close</button>
        <div className="detail-modal-image-info">
          <h3>{details.name}</h3>
          <p>{details.species}</p>
        </div>
      </div>
      <div className="detail-modal-info">
        <AboutComponent/>
        <OriginComponent/>
        <LocationComponent/>
      </div>
    </div>
  );
};

export default CharacterModal;
