import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPhotoById } from '../utils/api';
import { toggleFavorite, isFavorite } from '../utils/favorites'
import type { photoItem } from '../types/photo';
import Header from '../components/Header';

export default function PhotoDetail() {
  const { id } = useParams();
  const [photo, setPhoto] = useState<photoItem | null>(null);

  console.log('photo', photo)

  useEffect(() => {
    if (id) getPhotoById(id).then(setPhoto);
  }, [id]);

  if (!photo) return <div>Loading...</div>;

  const handleToggleFavorite = () => {
    toggleFavorite(photo);
    setPhoto({ ...photo });
  };

  return (
    <>
        <Header/>
        <div className="photoDetailBackground">
          
          <div className="photoDetail">
            <div className='description'>
                <div className='author'>
                    <img src={photo.user.profile_image.small} alt={photo.user.name} />
                    <p>Автор: {photo.user.name}</p>
                </div>
                <div className='buttons'>
                  <button onClick={handleToggleFavorite}>
                        {isFavorite(photo.id) ? '♥' : '♡'}
                    </button>
                    <a
                      className="downloadButton"
                      href={photo.links.download}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                    
                </div>
            </div>
            <img src={photo.urls.regular} alt={photo.alt_description} />
            <h2>{photo.description || photo.alt_description || 'Untitled'}</h2>   
        </div>
        </div>
    </>
    
  );
}