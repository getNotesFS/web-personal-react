
import {  Routes, Route } from 'react-router-dom';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useState } from 'react';
import './App.css';

import {
  Layout

} from 'antd';

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
import { dataFotografia, dataSenderismo, dataVideojuegos } from './data/search-data';


const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

function App() {


  const [searchVisible, setSearchVisible] = useState(false);
  let {Content} = Layout;

  return (

    <Layout className="layout" style={{ minHeight: "100vh" }}>


      <Content>
        <div className="site-layout-content">
          <ScrollToTop />
          <Header setSearchVisible={setSearchVisible} />
          <main>
            <div className='search_main_container'>
              {searchVisible && <Search data={database.hobbies} setSearchVisible={setSearchVisible} />}
            </div>
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

        </div>
      </Content>


    </Layout>

  );
}

export default App;
