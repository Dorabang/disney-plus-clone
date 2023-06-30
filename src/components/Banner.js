import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import requests from '../api/request';
import './Banner.css';
import { styled } from 'styled-components';

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const fetchData = async () => {
    const response = await axios.get(requests.fetchNowPlaying);
    const movieId =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id;

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: 'videos' },
    });
    setMovie(movieDetail);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n) + '...' : str;
  };

  if (isClicked) {
    return (
      <>
        <button
          className='btn_cancel'
          onClick={() => setIsClicked((prev) => !prev)}
        >
          X
        </button>
        <Container>
          <HomeContainer>
            <Iframe
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
              width='640'
              height='360'
              frameborder='0'
              allow='autoplay; fullscreen'
            ></Iframe>
          </HomeContainer>
        </Container>
      </>
    );
  } else {
    return (
      <div
        className='banner'
        style={{
          background: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}') top center`,
          backgroundSize: 'cover',
        }}
      >
        <div className='banner_bg'></div>
        <div className='banner_contents'>
          <h2 className='banner_title'>
            {movie.title || movie.name || movie.original_name}
          </h2>

          <div className='banner_buttons'>
            {movie?.videos?.results[0]?.key && (
              <button
                className='banner_button play'
                onClick={() => setIsClicked(true)}
              >
                Play
              </button>
            )}
          </div>
          <p className='banner_desc'>{truncate(movie.overview, 100)}</p>
        </div>
        <div className='banner_fadeBottom' />
      </div>
    );
  }
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default Banner;
