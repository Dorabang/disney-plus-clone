import { useEffect } from 'react';
import './MovieModal.css';

const MovieModal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  modalRef,
  modalOutSideClick,
  setModalOpen,
}) => {
  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <div className='presentation' role='presentation'>
      <div
        className='wrapper-modal'
        ref={modalRef}
        onClick={(e) => modalOutSideClick(e)}
      >
        <div className='modal'>
          <span
            onClick={() => setModalOpen(false)}
            className='modal-close'
          ></span>

          <img
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt='modal_poster-img'
            className='modal_poster-img'
          />

          <div className='modal_content'>
            <h2 className='modal_title'>{title ? title : name}</h2>
            <p className='modal_details'>
              <span className='modal_user_perc'>개봉일 : </span>
              {release_date ? release_date : first_air_date}
            </p>
            <p className='modal_overview'>평점 : {vote_average}</p>
            <p className='modal_overview'>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
