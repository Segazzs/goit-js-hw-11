export function getImagesByQuery(query) {
  const apiKey = '51493488-12143edce1099078d847fb8bb';
  const encodedQuery = encodeURIComponent(query.trim());

  return `https://pixabay.com/api/?key=${apiKey}&q=${encodedQuery}&orientation=horizontal&image_type=photo&safesearch=true`;
}
