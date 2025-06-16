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
    <div className="searshBlock">
        <input
            type="text"
            placeholder="Search photos..."
            value={query}
            onChange={e => setQuery(e.target.value)}
        />
      <button onClick={handleSearch}>Search</button>
    </div>
      
    <div className="grid">

{/* {query ? 'yes' : 'no'} */}
    {query ? results.map(photo => (
        <PhotoCard key={photo.id} photo={photo} />
    )) : photos.map(photo => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}

    {/* {results.map(photo => (
        <PhotoCard key={photo.id} photo={photo} />
    ))} */}
    </div>
    </>
  );
}