import type { photoItem } from "../types/photo";

const FAVORITES_KEY = 'favorites';

export function getFavorites() {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
}

export function toggleFavorite(photo: photoItem) {
  const favorites = getFavorites();
  const exists = favorites.find((p: photoItem) => p.id === photo.id);
  let updated;
  if (exists) {
    updated = favorites.filter((p: photoItem) => p.id !== photo.id);
  } else {
    updated = [...favorites, photo];
  }
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
}

export function isFavorite(id: string) {
  const favorites = getFavorites();
  return favorites.some((p: photoItem) => p.id === id);
}
