import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemUsuario from './img/1628897723425.jpg';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemEmail from './img/1782765.png'
import ImagemLocalização from './img/88bc005a6b728cafbf76668607205b25.jpg'
import ImagemParaBaixo from './img/parabaixo.png'
import ImagemNasa from './img/nasa.png'


function App() {

  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemUsuario} 
          nome="Rafael Beserra" 
          descricao="Oi, eu sou o Rafael. Sou formado em Telecomunicações e estudante full stack na Labenu. Tenho grande experiência em transmissão das redes de telecomunicações WDM, DWDM POTN, PTN entre outros, porém identifico a necessiadade de mudar de área"
        />

        <ImagemButton 
          imagem={ImagemParaBaixo}
          texto="Ver mais"
        />
      </div>

      <div className='page-section-container'>
        <CardPequeno 
          imagem={ImagemEmail}
          nome={"Email:"}
          descrição={"123@gmail.com"}
        />

        <CardPequeno 
          imagem={ImagemLocalização}
          nome={"Endereço: "}
          descrição={"Rua Labenu"}
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem={ImagemNasa}
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
