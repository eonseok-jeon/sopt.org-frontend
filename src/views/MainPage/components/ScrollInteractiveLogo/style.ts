import styled from '@emotion/styled';
import icSoptLogoWhite from '@src/assets/icons/ic_logo_sopt_white.svg';

export const Container = styled.div`
  height: 250vh;
  width: 100vw;
  margin-bottom: -60vh;
`;

export const Wrapper = styled.div`
  height: 100vh;
  top: 0;
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

export const Logo = styled.div`
  background-image: url(${icSoptLogoWhite});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 415rem;
  height: 144rem;

  @media (max-width: 768px) {
    width: 225rem;
    height: 84rem;
  }

  @media (max-width: 376px) {
    height: 78rem;
  }
`;

export const WhiteBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1;
`;

export const DescriptionText = styled.div`
  font-family: SUIT;
  font-size: 32rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(93deg, #fff 29.05%, #c1d2d8 89.19%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* 모바일 뷰 */
  @media (max-width: 899px) {
    font-family: SUIT;
    font-size: 14.656rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
