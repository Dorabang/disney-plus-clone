import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from '../../api/axios';
import './Row.css';
import MovieModal from '../MovieModal';

const Row = ({ id, title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  /* 
  // 모달 제외 화면 클릭 시, close 기능 => custom Hooks로 처리
  const modalRef = useRef(null);

  const modalOutSideClick = (e) => {
    // console.log(modalRef.current);
    // console.log(e.target);
    if (modalRef.current === e.target) {
      setModalOpen(false);
    }
  };
 */

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
    // console.log(response.data.results);
    return response;
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  return (
    <div>
      <h2>{title}</h2>
      <div className='slider'>
        <div
          className='slider_arrow slider_arrow-left'
          onClick={() => {
            document.getElementById(id).scrollLeft -= window.innerWidth - 80;
          }}
        >
          <span className='arrow'>{'<'}</span>
        </div>

        <div id={id} className='row_posters'>
          {movies.map((movie) => (
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={`${movie.name} 포스터`}
              className='row_poster'
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>

        <div
          className='slider_arrow slider_arrow-right'
          onClick={() => {
            document.getElementById(id).scrollLeft += window.innerWidth - 80;
          }}
        >
          <span className='arrow'>{'>'}</span>
        </div>
      </div>
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </div>
  );
};

export default Row;
