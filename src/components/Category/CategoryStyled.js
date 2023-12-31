import { styled } from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: 0px 26px 30px -10px rgb(0 0 0 / 69%),
    0px 16px 10px -10px rgba(0 0 0 / 73%);
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 2px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: 0px 40px 58px -16px rgba(0 0 0 / 80%),
      0px 30px 22px -10px rgba(0 0 0 / 72%);

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;
