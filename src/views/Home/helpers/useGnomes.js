import { useState, useEffect } from 'react';
import { getAPIData } from 'services/network';
const CHUNK_SIZE = 50;

export default ({ pageNumber = 1 }) => {
  const [gnomes, setGnomes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  // view data in chunks to improve performance
  const [gnomesChunk, setGnomeChunk] = useState([]);

  const getGnomesList = async () => {
    setLoading(true);
    const { data: { Brastlewark: gnomes = [] } = {}, error } = await getAPIData(
      'data.json'
    );

    if (error) return setError(error);

    // present the first {CHUNK_SIZE} data
    setGnomeChunk((gnomeChunks) => {
      return [...gnomeChunks, ...gnomes.slice(0, CHUNK_SIZE)];
    });
    // to have all data saved for load more event
    setGnomes(gnomes);
    setHasMore(CHUNK_SIZE <= gnomes.length);
    setLoading(false);
  };

  useEffect(() => {
    setGnomeChunk((prevChunk) => [
      ...prevChunk,
      ...gnomes.slice((pageNumber - 1) * CHUNK_SIZE, pageNumber * CHUNK_SIZE),
    ]);
    setHasMore(pageNumber * CHUNK_SIZE <= gnomes.length);
    /*eslint-disable-next-line*/
  }, [pageNumber]);

  useEffect(() => {
    getGnomesList();
    /*eslint-disable-next-line*/
  }, []);

  return { gnomesChunk, hasMore, gnomes, loading, error };
};
