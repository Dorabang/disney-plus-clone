import axios from '../../api/axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SearchPage.css';
import useDebounce from '../../hooks/useDebounce';

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const Navigate = useNavigate();

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();

  const debouncedSearchTerm = useDebounce(query.get('q'), 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const response = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );

      // console.log(response.data.results);
      setSearchResults(response.data.results);
    } catch (e) {
      console.log('Error:', e);
    }
  };

  if (searchResults.length > 0) {
    return (
      <section className='search-container'>
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== 'person') {
            const movieImageUrl =
              'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;
            return (
              <div className='movie' key={movie.id}>
                <div
                  className='movie_column-poster'
                  onClick={() => Navigate(`/${movie.id}`)}
                >
                  <img
                    src={movieImageUrl}
                    alt='movie'
                    className='movie_poster'
                  />
                </div>
              </div>
            );
          }
        })}
      </section>
    );
  } else {
    return (
      <section className='no-results'>
        <div className='no-result_text'>
          <p>
            찾고자 하는 검색어 "{debouncedSearchTerm}"에 맞는 영화가 없습니다.
          </p>
        </div>
      </section>
    );
  }
};

export default SearchPage;
