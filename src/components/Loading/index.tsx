import ReactLoading from 'react-loading';

import image from "../../assets/imgs/rick_morty_loading.jpg";

import "./styles.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <img src={image} width={200} alt="Imagem de Rick com braços estendidos"/>
        <ReactLoading 
          type="spinningBubbles" 
          color="#c290cc" 
          className="loading-spinning"
        />
      </div>
    </div>
  );
};

export default Loading;
