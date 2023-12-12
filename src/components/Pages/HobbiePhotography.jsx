import React from "react"; 
 

import HobbiesPost from "components/Pages/HobbiesPost";
export default function HobbiePhotography(props) {

 
 

    const data2 = {
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


    const data = {
        title: "Senderismo",
        content: "El senderismo es un hobbie que me gusta mucho, aunque no soy un experto en el tema. Me gusta tomar fotos de paisajes, cielos, y de vez en cuando, de personas. En esta sección voy a compartir algunas de las fotos que he tomado en mis viajes y paseos.",
        img_url: "/trekkin-2.jpg",
        arial_label: "Senderismo a la montaña El Altar, Ecuador",
        video_url_pg: "https://www.youtube.com/shorts/zmX2kn9T-Pw",
        galleryItems: [
            { imageUrl: "/video-trekking.jpg", caption: "Video de paracaidismo en Ecuador", video_url:"https://www.youtube.com/shorts/zmX2kn9T-Pw"},
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
            

   return (
    <div>
            {/* Hacer un map de data */}

            <HobbiesPost
                title={data.title}
                content={data.content}
                img_url={data.img_url}
                video_url_pg={data.video_url_pg}
                arial_label={data.arial_label}
                galleryItems={data.galleryItems}
                nextLink={data.nextLink}
                previousLink={data.previousLink}
            />
            
    </div>
  
   );
}

