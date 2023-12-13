 
 
const dataFotografia = {
  page_url: "/hobbies/fotografia",
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
  nextLink: { path: "/hobbies/senderismo", label: "Senderismo" },
  previousLink: { path: "/hobbies/videojuegos", label: "Videojuegos" }
};


const dataSenderismo = {
  page_url: "/hobbies/senderismo",
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
  nextLink: { path: "/hobbies/senderismo", label: "Senderismo" },
  previousLink: { path: "/hobbies/videojuegos", label: "Videojuegos" }
};



const dataVideojuegos = {
  page_url: "/hobbies/videojuegos",
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
  previousLink: { path: "/hobbies/hobbies", label: "Hobbies" },
};




const dataPeliculas = {
  page_url: "/peliculas",
  title: "Películas que recomiendo",
  content:
    "Te comparto algunas de mis películas favoritas.",
  img_url: "./top-10-peliculas.jpg",
  arial_label: "Películas",
  video_url_pg: "https://www.youtube.com/watch?v=U1drsdHFyTU",
  galleryItems: [
    {
      imageUrl: "./videos/Memento.jpg",
      caption: "Memento",
      year: "2000",
      director: "Christopher Nolan",
      cast: "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano",
      description: "La memoria de Leonard, un investigador de una agencia de seguros...",
      content_title: "Información de la película",
      trailer_url: "https://www.youtube.com/embed/mV9l1enMqvk?si=8Kh2Y14WykGMuC5g",
      content_url: "https://www.filmaffinity.com/es/film931317.html",
      imgsrc_2: "./memento.png",
      imgsrc_3: "./memento.jpg",
    },
    {
      imageUrl: "./videos/Her.jpg",
      caption: "Her",
      year: "2013",
      director: "Spike Jonze",
      cast: "Joaquin Phoenix, Amy Adams, Rooney Mara, Olivia Wilde, Scarlett Johansson",
      description: "En un futuro cercano, Theodore, un hombre solitario a punto de divorciarse...",
      content_title: "Información de la película",
      trailer_url: "https://www.youtube.com/embed/M7oBRAG8NBg?si=8MxS6SXH4imFXxJL",
      content_url: "https://www.filmaffinity.com/es/film889720.html",
      imgsrc_2: "./her-2.jpg",
      imgsrc_3: "./her-3.jpg",
    },
    {
      imageUrl: "./videos/Interestelar.jpg",
      caption: "Interstellar",
      year: "2014",
      director: "Christopher Nolan",
      cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, Michael Caine, Matt Damon",
      description: "Al ver que la vida en la Tierra está llegando a su fin, un grupo de exploradores...",
      content_title: "Información de la película",
      trailer_url: "https://www.youtube.com/embed/UoSSbmD9vqc?si=MMerG5hrSgnRYRaw",
      content_url: "https://www.filmaffinity.com/es/film704416.html",
      imgsrc_2: "./interestelar-2.jpg",
      imgsrc_3: "./interestelar-3.jpg",
    },
  ]
};



const dataMusica = {
  page_url: "/musica",
  title: "Música",
  content: "Te comparto mis últimos Playlists en Spotify.",
  img_url: "/music-player/Rock.png",
  arial_label: "Música",
  video_url_pg: "https://open.spotify.com/playlist/1IkEWkIBECMGVX9Qseka9x",
  galleryItems: [
    {
      page_url: "https://open.spotify.com/playlist/1IkEWkIBECMGVX9Qseka9x",
      imageUrl: "./music-player/Rock.png",
      altText: "Playlist - Rebel Yell",
      caption: "Playlist - Rebel Yell",
      isExternal: true,
    },
    {
      page_url: "https://open.spotify.com/playlist/4U92L85BOQ7b8RcN4gVvKx",
      imageUrl: "./music-player/Rock-2.png",
      altText: "Playlist - Rock",
      caption: "Playlist - Rock",
      isExternal: true,
    },
    {
      page_url: "https://open.spotify.com/playlist/4nbtiQ3c8HegHGJznv7VXl",
      imageUrl: "./music-player/Indie-505.png",
      altText: "Playlist - Indie 505",
      caption: "Playlist - Indie 505",
      isExternal: true,
    },
    {
      page_url: "https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn",
      imageUrl: "./music-player/Lofi-beats.png",
      altText: "Playlist - Lofi beats",
      caption: "Playlist - Lofi beats",
      isExternal: true,
    },
    {
      page_url: "https://open.spotify.com/playlist/37i9dQZF1DX3oM43CtKnRV",
      imageUrl: "./music-player/00s-Rock-Athems.png",
      altText: "Playlist - 00s Rock Athems",
      caption: "Playlist - 00s Rock Athems",
      isExternal: true,
    },
    {
      page_url: "https://open.spotify.com/playlist/37i9dQZF1E37smVryC6Cet?si=9db5ffda56ab4466",
      imageUrl: "./music-player/Daily-Mix-2.png",
      altText: "Playlist - Daily Mix 2",
      caption: "Playlist - Daily Mix 2",
      isExternal: true,
    },
  ],
};


const dataSobreMi = {
  page_url: "/sobre-mi",
  title: "¡Hola, soy Sebastián Mármol!",
  content:
    "He estado trabajando como desarrollador web freelance durante los últimos 2 años. Mi experiencia en la carrera de Medios Interactivos ha enriquecido mi comprensión sobre el trabajo colaborativo y la vital interdisciplinariedad en los proyectos. Me caracterizo por ser una persona perseverante e íntegra, valores que reflejo en cada proyecto y en mi interacción con los clientes. La curiosidad es uno de mis rasgos distintivos, lo que me mantiene en una constante búsqueda de aprendizaje y exploración, especialmente en el dinámico mundo de Internet. Recientemente, he iniciado mi camino en el Máster de Ingeniería Web en la Universidad de Oviedo, con la expectativa de profundizar mis conocimientos y habilidades en el campo.",
    img_url: "/Me-2.jpg",
  arial_label: "Sebastián Mármol",
  galleryItems: [
    {
      url: "https://www.linkedin.com/in/sfmarmol",
      icon: "linkedin",
      caption: "LinkedIn",
    },
    {
      url: "https://github.com/getnotesfs",
      icon: "github",
      caption: "GitHub",
    },
    {
      url: "mailto:contacto@sfmarmol.com",
      icon: "email",
      caption: "Email",
    },
  ],
  map_url: "https://www.google.com/maps/place/Oviedo,+Asturias/data=!4m2!3m1!1s0xd368c9a60ac1c67:0x3134440ecc5e6224?sa=X&ved=2ahUKEwiTnOjtn4mDAxUxVaQEHdW-DPYQ8gF6BAgPEAA",

};

  

const database = {
  hobbies: [
    {
      id: 'fotografia',
      page_url: dataFotografia.page_url,
      title: dataFotografia.title,
      content: dataFotografia.content,
      img_url: dataFotografia.img_url,
      arial_label: dataFotografia.arial_label,
      galleryItems: dataFotografia.galleryItems,
      nextLink: dataFotografia.nextLink,
      previousLink: dataFotografia.previousLink,
    },
    {
      id: 'senderismo',
      page_url: dataSenderismo.page_url,
      title: dataSenderismo.title,
      content: dataSenderismo.content,
      img_url: dataSenderismo.img_url,
      arial_label: dataSenderismo.arial_label,
      video_url_pg: dataSenderismo.video_url_pg,
      galleryItems: dataSenderismo.galleryItems,
      nextLink: dataSenderismo.nextLink,
      previousLink: dataSenderismo.previousLink,
    },
    {
      id: 'videojuegos',
      page_url: dataVideojuegos.page_url,
      title: dataVideojuegos.title,
      content: dataVideojuegos.content,
      img_url: dataVideojuegos.img_url,
      arial_label: dataVideojuegos.arial_label,
      video_url_pg: dataVideojuegos.video_url_pg,
      galleryItems: dataVideojuegos.galleryItems,
      nextLink: dataVideojuegos.nextLink,
      previousLink: dataVideojuegos.previousLink,
    },
    {
      id: 'peliculas',
      page_url: dataPeliculas.page_url,
      title: dataPeliculas.title,
      content: dataPeliculas.content,
      img_url: dataPeliculas.img_url,
      arial_label: dataPeliculas.arial_label,
      video_url_pg: dataPeliculas.video_url_pg,
      galleryItems: dataPeliculas.galleryItems,
    },
    {
      id: 'musica',
      page_url: dataMusica.page_url,
      title: dataMusica.title,
      content: dataMusica.content,
      img_url: dataMusica.img_url,
      arial_label: dataMusica.arial_label,
      video_url_pg: dataMusica.video_url_pg,
      galleryItems: dataMusica.galleryItems, 
    },
    {
      id: 'sobre-mi',
      page_url: dataSobreMi.page_url,
      title: dataSobreMi.title,
      content: dataSobreMi.content,
      img_url: dataSobreMi.img_url,
      arial_label: dataSobreMi.arial_label,
      contactLinks: dataSobreMi.contactLinks,
      map_url: dataSobreMi.map_url,
    }
  ],
};

  
// Exportaciones con nombre
export { dataFotografia, dataSenderismo, dataVideojuegos };
export default database;
 

