import axios from '../../api/axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './DetailPage.css';

const DetailPage = () => {
  let { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const Navigate = useNavigate();

  // console.log(movieId);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/movie/${movieId}`);
      console.log(response.data);
      setMovie(response.data);
    }

    fetchData();
  }, [movieId]);

  if (!movie) return null;

  return (
    <section
      style={{
        background: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}) center center / cover no-repeat`,
      }}
    >
      <div className='detail_wrapper'>
        <div className='detail_content'>
          <div className='detail_prev' onClick={() => Navigate(-1)}>
            ←
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt='movie poster'
            className='detail_poster-img'
          />
          <div className='detail_info'>
            <h2 className='detail_title'>
              {movie.original_title || movie.name || movie.title}
            </h2>
            <div className='detail_desc'>
              <p className='detail_overview'>
                <span>개봉일 : </span>
                {movie.release_date ? movie.release_date : movie.first_air_date}
              </p>
              <p>
                <span>평점 : </span>
                {movie.vote_average} /{' '}
                {Number(movie.vote_count).toLocaleString()}명
              </p>
              <p className='detail_overview'>
                <span>줄거리 : </span>
                {movie.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
