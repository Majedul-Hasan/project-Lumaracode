function getImgUrl(name) {
  const url = new URL(`../assets/${name}`, import.meta.url).href;
  console.log('first', url);
  return url;
}

export { getImgUrl };
