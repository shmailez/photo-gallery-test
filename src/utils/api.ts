const API_KEY = 'jFdw9OYKnYocdd7mte-fwsB1C__nYN9ZJCmCCjlHtY4';
const BASE_URL = 'https://api.unsplash.com';

export async function getRandomPhotos(count: number) {
  const res = await fetch(`${BASE_URL}/photos/random?count=${count}`, {
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
  });
  return res.json();
}

export async function searchPhotos(query: string) {
  const res = await fetch(`${BASE_URL}/search/photos?query=${query}`, {
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
  });
  const data = await res.json();
  return data.results;
}

export async function getPhotoById(id: string) {
  const res = await fetch(`${BASE_URL}/photos/${id}`, {
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
  });
  return res.json();
}