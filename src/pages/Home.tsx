// import { useEffect } from 'react';
// import { getRandomPhotos } from '../utils/api';
// import PhotoCard from '../components/PhotoCard';
import Search from './Search';
// import type { photoItem } from '../types/photo';
import Header from '../components/Header';

export default function Home() {
//   const [photos, setPhotos] = useState<photoItem[]>([]);

//   useEffect(() => {
//     getRandomPhotos(8).then(setPhotos);
//   }, []);

  return (
    <>
    <Header/>
    <Search/>
    {/* <div className="grid">
        
      {photos.map(photo => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div> */}
    </>
    
  );
}