 

import useDocumentTitle from "../Hooks/custom-hooks";
import WhoAmISection from 'components/Sections/WhoAmISection/WhoAmISection';
import PlaylistSection from 'components/Sections/PlaylistSection/PlaylistSection';
import HobbiesSection from 'components/Sections/HobbiesSection/HobbiesSection';
import MovieSection from 'components/Sections/MovieSection/MovieSection';

const Home = () => {
    useDocumentTitle('Inicio - Sebastián Mármol');
    return (
        <>
            <WhoAmISection />
            <PlaylistSection />
            <HobbiesSection />
            <MovieSection />
        </>
    )
} 

export default Home;