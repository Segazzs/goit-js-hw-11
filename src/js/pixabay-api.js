export function getImagesByQuery(query) {
  let apiKey = '51493488-12143edce1099078d847fb8bb';
  const encodedQuery = encodeURIComponent(query);
  return `https://pixabay.com/api/?key=${apiKey}&q=${encodedQuery}&orientation=horizontal&image_type=photo&safesearch=true&max_height=200&min_width=400`;
}
