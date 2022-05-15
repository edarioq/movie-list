export const showPoster = (url: string): string => {
  if (url) {
    return `${process.env.NEXT_PUBLIC_TMDB_IMAGE}/t/p/w200${url}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_V3}`;
  }
  return url;
};
