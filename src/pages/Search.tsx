import { useEffect, useState } from 'react';
import { getRandomPhotos, searchPhotos } from '../utils/api';
import PhotoCard from '../components/PhotoCard';
import type { photoItem } from '../types/photo';

export default function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<photoItem[]>([]);
    const [photos, setPhotos] = useState<photoItem[]>([]);
    
    const handleSearch = async () => {
        if (!query) return;
        const photos = await searchPhotos(query);
        setResults(photos);
    };

    useEffect(() => {
      getRandomPhotos(8).then(setPhotos);
    }, []);

  return (
    <>
    <div className="searchBar">
        <input
            type="text"
            placeholder="Поиск"
            value={query}
            onChange={e => setQuery(e.target.value)}
        />
      <button onClick={handleSearch}>🔎︎</button>
    </div>
      
    <div className="gridGallery">


    {query ? results.map(photo => (
        <PhotoCard key={photo.id} photo={photo} />
    )) : photos.map(photo => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}

    </div>
    </>
  );
}