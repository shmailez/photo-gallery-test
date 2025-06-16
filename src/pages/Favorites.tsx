import { getFavorites } from '../utils/favorites';
import PhotoCard from '../components/PhotoCard';
import { useState, useEffect } from 'react';
import type { photoItem } from '../types/photo';
import Header from '../components/Header';

export default function Favorites() {
  const [photos, setPhotos] = useState<photoItem[]>([]);

  useEffect(() => {
    setPhotos(getFavorites());
  }, []);

  return (
    <>
    <Header/>
    <h1 className='favoritesTitle'>Избранное</h1>
    <div className="gridGallery">
      {photos.length > 0 ? (
        photos.map(photo => <PhotoCard key={photo.id} photo={photo} />)
      ) : (
        <p>Нет избранных фото</p>
      )}
    </div></>
    
  );
}