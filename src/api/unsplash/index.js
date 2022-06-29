const API_URL = `https://api.unsplash.com/search/photos?query=nature&page=1&per_page=5&client_id=SAnzfdRMTlLQ-zTQ8B9H5pANO5jNjnJ8qlKesmA9e-o`;

export const getImage = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();

  return json.results.map((result) => result.urls.full);
};

const unsplashApi = {
  getImage
};

export default unsplashApi;
