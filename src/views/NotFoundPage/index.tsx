import image from "../../assets/imgs/notfound_morty.png";
import "./styles.css";

const NotFoundPage = () => {

  return (
    <main className="not-found-page">
      <article className="not-found-content">
        <img src={image} alt="Ilustração de Morty" />
        <p>Ops, você entrou num universo inexistente!</p>
      </article>
    </main>
  );
};

export default NotFoundPage;
