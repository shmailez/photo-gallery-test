import { Link } from 'react-router-dom';
import type { photoItem } from '../types/photo';

export default function PhotoCard({ photo }: { photo: photoItem }) {
  return (
    <div className="photo-card">
      <Link to={`/photo/${photo.id}`}>
        <img src={photo.urls.small} alt={photo.alt_description} />
      </Link>
    </div>
  );
}