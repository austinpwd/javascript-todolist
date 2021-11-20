const dataFetcher = async function (url) {
  const response = await fetch(url);
  const payload = await response.json()
 
  return payload
};

export { dataFetcher };
