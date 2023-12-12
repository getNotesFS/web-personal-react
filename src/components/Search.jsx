import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Fuse from 'fuse.js';
import './Search.css';

const highlightMatch = (dataItem, matches, fieldName) => {
    // Si no hay matches, devuelve el ítem original.
    if (!matches) return dataItem;

    // Si el ítem es una cadena, se aplica el resaltado.
    if (typeof dataItem === 'string') {
        let result = dataItem;
        // Encuentra matches específicos para este campo y aplica el resaltado.
        matches.filter(m => m.key === fieldName).forEach(match => {
            match.indices.forEach(([start, end]) => {
                const partToReplace = result.slice(start, end + 1);
                result = result.replace(partToReplace, `<mark>${partToReplace}</mark>`);
            });
        });
        return result;
    }

    // Si el ítem es un arreglo, aplica la función a cada elemento del arreglo.
    if (Array.isArray(dataItem)) {
        return dataItem.map(subItem => {
            // Si el subItem es un objeto, busca en sus propiedades.
            if (typeof subItem === 'object' && subItem !== null) {
                const newSubItem = { ...subItem }; // Clona para no mutar el original
                for (const key of Object.keys(newSubItem)) {
                    newSubItem[key] = highlightMatch(newSubItem[key], matches, `${fieldName}.${key}`);
                }
                return newSubItem;
            } else {
                // Si es una cadena dentro del arreglo, aplica el resaltado directamente.
                return highlightMatch(subItem, matches, fieldName);
            }
        });
    }

    // Si no es un string o un array, simplemente devuelve el ítem.
    return dataItem;
};






const Search = ({ data, setSearchVisible }) => {

    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const handleClick = () => {
        setIsSearchVisible(prev => !prev);
        setSearchVisible(prev => !prev);
    };


    const searchContainerRef = useRef(null); // Referencia al contenedor de búsqueda

    // ... (lógica para highlightMatch, galleryItemToHtml, etc.)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                setSearchVisible(false); // Esto cierra el contenedor de búsqueda
            }
        };

        // Agrega el listener al documento
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Limpia el listener cuando el componente se desmonta
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setSearchVisible]);

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);


    const galleryItemToHtml = (galleryItem) => {
        let year_tmp = "";
        let img_tmp = "";
        let caption_tmp = "";
        let description_tmp = "";
        
        if (!galleryItem) year_tmp = "";
        else year_tmp = galleryItem.year;

        if (!galleryItem) img_tmp = "";

        else img_tmp = galleryItem.imageUrl;
       
        return `
          <div>
            <img src="${galleryItem.imageUrl || `/Logo sm -1x1_2.svg`}" alt="${galleryItem.caption || ` `}" />
            <p>${galleryItem.caption || ` `}</p>
            <p>${galleryItem.year || ` `}</p>
          </div>
        `;
    };

    useEffect(() => {
        if (query && data.length > 0) {
            // Obtiene las claves del primer objeto en tus datos
            // const searchKeys = getKeysFromData(data[0]);

            // console.log(searchKeys);

            const fuse = new Fuse(data, {
                keys: [
                    'title',
                    'content',
                    'page_url',
                    'img_url',
                    'video_url_pg',
                    'arial_label',
                    'galleryItems.caption',
                    'galleryItems.year',
                    'galleryItems.description',
                    'nextLink.label',
                    'previousLink.label',
                ],
                includeScore: true,
                includeMatches: true,
            });

            setResults(fuse.search(query).map(result => result.item));
        } else {
            setResults([]);
        }
    }, [query, data]);

    return (
        <div className='search-container' ref={searchContainerRef}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar..."
            />
            <ul className='search-results'>
                {results.map((item, index) => (
                    <Link to={item.page_url} key={index} onClick={handleClick}>
                        <li key={index}>
                            <span>
                                <img src={item.img_url} alt={item.title} /> <br />
                                Página -  <strong dangerouslySetInnerHTML={{ __html: highlightMatch(item.title, item.matches, 'title') }} />
                                <hr style={{width:"autos"}} />
                            </span>


                            <div key={index + "-" + item.key}>
                                {item.galleryItems && item.galleryItems.map((galleryItem, galleryIndex) => (
                                    <div dangerouslySetInnerHTML={{ __html: galleryItemToHtml(galleryItem) }} key={galleryIndex}>
                                        

                                      
                                    </div>
                                ))}
                            </div>



                        </li>
                    </Link>
                ))}
            </ul>



        </div>
    );
};

export default Search;
