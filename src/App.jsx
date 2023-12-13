
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './components/Pages/Home';
import Music from './components/Pages/Music';
import Hobbies from './components/Pages/Hobbies';
import Movie from './components/Pages/Movie';
import AboutMe from './components/Pages/AboutMe';

import HobbiesPost from './components/Pages/HobbiesPost';

import Search from './components/Search';

import database from './data/search-data';


// Otros imports de componentes...
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

function App() {



  const [searchVisible, setSearchVisible] = useState(false);




  const dataFotografia = {
    title: "Fotografía",
    content: "La fotografía es un hobbie que me gusta mucho, aunque no soy un experto en el tema. Me gusta tomar fotos de paisajes, cielos, y de vez en cuando, de personas. En esta sección voy a compartir algunas de las fotos que he tomado en mis viajes y paseos.",
    img_url: "/astronomy.jpg",
    arial_label: "Observatorio Calar Alto, España",
    galleryItems: [
      { imageUrl: "/astronomy.jpg", caption: "Observatorio Calar Alto, España" },
      { imageUrl: "/trekkin-2.jpg", caption: "Montaña El Altar, Ecuador" },
      { imageUrl: "/astronomy-2.jpg", caption: "Vía Láctea desde montaña El Altar, Ecuador" },
      { imageUrl: "/astronomy-3.jpg", caption: "Vía Láctea desde montaña El Altar, Ecuador" },
      { imageUrl: "/photography-2.jpg", caption: "Atardecer en Barcelona, España" },
      { imageUrl: "/photography-3.jpg", caption: "Atardecer en Barcelona, España" },
      { imageUrl: "/travel-6.jpg", caption: "La Sagrada Familia, España" },
      { imageUrl: "/photography-4.jpg", caption: "Ave voladora de nombre Curiquingue, Ecuador" },

    ],
    nextLink: { path: "/hobbies/videojuegos", label: "Videojuegos" },
    previousLink: { path: "/hobbies/senderismo", label: "Senderismo" }
  };


  const dataSenderismo = {
    title: "Senderismo",
    content: "El senderismo es un hobbie que me gusta mucho, aunque no soy un experto en el tema. Me gusta tomar fotos de paisajes, cielos, y de vez en cuando, de personas. En esta sección voy a compartir algunas de las fotos que he tomado en mis viajes y paseos.",
    img_url: "/trekkin-2.jpg",
    arial_label: "Senderismo a la montaña El Altar, Ecuador",
    video_url_pg: "https://www.youtube.com/shorts/zmX2kn9T-Pw",
    galleryItems: [
      { imageUrl: "/video-trekking.jpg", caption: "Video de paracaidismo en Ecuador", video_url: "https://www.youtube.com/shorts/zmX2kn9T-Pw" },
      { imageUrl: "/trekkin-2.jpg", caption: "Montaña El Altar, Ecuador" },
      { imageUrl: "/astronomy-2.jpg", caption: "Vía Láctea desde montaña El Altar, Ecuador" },
      { imageUrl: "/camping.jpg", caption: "Camping en la montaña El Altar, Ecuador" },
      { imageUrl: "/travel2.jpg", caption: "Laguna de Quilotoa, Ecuador" },
      { imageUrl: "/travel.jpg", caption: "Laguna de Quilotoa, Ecuador" },
      { imageUrl: "/travel3.jpg", caption: "Refugio 2 del Chimborazo" },
      { imageUrl: "/travel4.jpg", caption: "Volcán Cotopaxi" },
      { imageUrl: "/travel5.jpg", caption: "Laguna de Mojanda, Ecuador" }
    ]
    ,
    nextLink: { path: "/hobbies/fotografia", label: "Fotografía" },
    previousLink: { path: "/hobbies/videojuegos", label: "Videojuegos" }
  };



  const dataVideojuegos = {
    title: "Videojuegos",
    content:
      "Los videojuegos ofrecen escapadas a mundos imaginarios, con desafíos y roles heroicos. Proporcionan una experiencia inmersiva a través de gráficos y narrativas envolventes. Fomentan el pensamiento estratégico y la interacción en juegos multijugador. Con diversos géneros, conectan y entretienen a personas globalmente.",
    img_url: "/video-videogame.jpg",
    arial_label: "Videojuegos",
    video_url_pg: "https://www.youtube.com/watch?v=41QFL4QB3NE",
    galleryItems: [
      {
        imageUrl: "/apex-legends-video.jpg",
        caption: "Apex Legends",
        video_url: "https://www.youtube.com/watch?v=r3Y2QeLYcwI",
      },
      {
        imageUrl: "/video-game.jpg",
        caption: "Setup - by Unsplash",
      },
      {
        imageUrl: "/apex-legends.jpeg",
        caption: "Apex Legends",
        description:
          "Apex Legends es un videojuego gratuito perteneciente a los géneros battle royale y hero shooter en primera persona, desarrollado por Respawn Entertainment y publicado por Electronic Arts.",
      },
      {
        imageUrl: "/planetside-2.webp",
        caption: "PlanetSide 2",
        description:
          "PlanetSide 2 es un videojuego de disparos en primera persona de mundo abierto que presenta combates que involucran potencialmente a miles de jugadores en estrecha proximidad y admite hasta 2,000 jugadores simultáneos en un solo mapa.",
      },
      {
        imageUrl: "/video-game4.jpg",
        caption: "Call Of Duty: Warzone",
        description:
          "Call of Duty: Warzone es un videojuego de disparos en primera persona, perteneciente al género Battle royale gratuito, lanzado el 10 de marzo de 2020 para PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S y Microsoft Windows.",
      },
    ],
    nextLink: { path: "/hobbies/senderismo", label: "Senderismo" },
    previousLink: { path: "/hobbies/fotografia", label: "Fotografía" },
  };



  return (
    <Router>
     <ScrollToTop />
      <Header setSearchVisible={setSearchVisible} />
      <div>
        {searchVisible && <Search data={database.hobbies} setSearchVisible={setSearchVisible} />}
      </div>
      <main>
 

        <Routes>
         
        <Route path="/" index element={<Home />} />
          <Route path="/musica" element={<Music />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/peliculas" element={<Movie />} />
          <Route path="/sobre-mi" element={<AboutMe />} />

          <Route path="/hobbies/fotografia" element={


            <HobbiesPost
              title={dataFotografia.title}
              content={dataFotografia.content}
              img_url={dataFotografia.img_url}
              video_url_pg={dataFotografia.video_url_pg}
              arial_label={dataFotografia.arial_label}
              galleryItems={dataFotografia.galleryItems}
              nextLink={dataFotografia.nextLink}
              previousLink={dataFotografia.previousLink}
            />
          } />

          <Route path="/hobbies/senderismo" element={
            
              <HobbiesPost
                title={dataSenderismo.title}
                content={dataSenderismo.content}
                img_url={dataSenderismo.img_url}
                video_url_pg={dataSenderismo.video_url_pg}
                arial_label={dataSenderismo.arial_label}
                galleryItems={dataSenderismo.galleryItems}
                nextLink={dataSenderismo.nextLink}
                previousLink={dataSenderismo.previousLink}
              /> 
          } />

          <Route path="/hobbies/videojuegos" element={<HobbiesPost
            title={dataVideojuegos.title}
            content={dataVideojuegos.content}
            img_url={dataVideojuegos.img_url}
            video_url_pg={dataVideojuegos.video_url_pg}
            arial_label={dataVideojuegos.arial_label}
            galleryItems={dataVideojuegos.galleryItems}
            nextLink={dataVideojuegos.nextLink}
            previousLink={dataVideojuegos.previousLink}
          />} />

 
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
