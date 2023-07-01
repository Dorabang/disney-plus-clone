import React, { useCallback, useEffect, useState } from 'react';
import axios from '../../api/axios';
import './Row.css';
import MovieModal from '../MovieModal';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styled
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Container, Content, Wrap } from './RowStyled';

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
    <Container>
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1378: { slidesPerView: 6, slidesPerGroup: 6 },
          998: { slidesPerView: 5, slidesPerGroup: 5 },
          625: { slidesPerView: 4, slidesPerGroup: 4 },
          0: { slidesPerView: 3, slidesPerGroup: 3 },
        }}
      >
        <Content id={id}>
          {movies.map((movie) => (
            <SwiperSlide>
              <Wrap>
                <img
                  key={movie.id}
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={`${movie.name} 포스터`}
                  onClick={() => handleClick(movie)}
                />
              </Wrap>
            </SwiperSlide>
          ))}
        </Content>
      </Swiper>
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </Container>
  );
};

export default Row;
