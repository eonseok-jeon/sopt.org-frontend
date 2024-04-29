import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Background = styled(motion.main)`
  max-width: 465px;
  width: 100%;
  height: 295px;
  border-radius: 19px;

  position: relative;
  z-index: 2;

  @media (max-width: 48rem) {
    width: calc(100% - 5.46vw - 54px);
  }

  @media (max-width: 26.75rem) and (min-width: 23.5rem) {
    border-radius: 21px;
    max-width: 296px;
    width: calc(100% - 5.46vw - 31px);
    height: 188px;
  }

  @media (max-width: 23.4375rem) {
    border-radius: 21px;
    max-width: 258px;
    height: 164px;
  }
`;

export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 19px;
  background: linear-gradient(0deg, rgba(70, 108, 166, 0) 51.31%, #2e4e80 100%);
  position: relative;
  z-index: 1;
`;

export const CardImage = styled(Image)`
  object-fit: cover;
  border-radius: 19px;
`;

export const CardKorNav = styled.nav`
  display: inline-flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 13.763px;
  border: 1.278px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.33);
  backdrop-filter: blur(2.949289321899414px);

  color: ${colors.white};
  font-family: SUIT;
  font-size: 21rem;
  font-style: normal;
  font-weight: 600;
  line-height: 28.288px; /* 134.707% */
  letter-spacing: -0.84px;

  position: absolute;
  top: 0;
  left: 0;
  margin-left: 26px;
  margin-top: 26px;
  z-index: 3;

  @media (max-width: 26.75rem) and (min-width: 23.5rem) {
    font-size: 13rem;
    line-height: 16.258px; /* 135.48% */
    letter-spacing: -0.48px;

    padding: 6px 18px;
    margin-left: 14px;
    margin-top: 14px;
    border-radius: 8px;
  }

  @media (max-width: 23.4375rem) {
    font-size: 10rem;
    line-height: 14.188px; /* 135.48% */
    letter-spacing: -0.419px;

    padding: 5px 15px;
    margin-left: 12px;
    margin-top: 12px;
    border-radius: 6px;
  }
`;

export const Blur = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  border-radius: 19px;
  background: rgba(38, 51, 70, 0.74);
  backdrop-filter: blur(6.881675720214844px);
  z-index: 2;

  padding: 26px;

  @media (max-width: 26.75rem) and (min-width: 23.5rem) {
    padding: 14px;
  }

  @media (max-width: 23.4375rem) {
    padding: 12px;
  }
`;

export const Content = styled.span<{ color: string }>`
  color: ${({ color }) => (color === 'yellow' ? '#ffe454' : '#fff')};
  font-family: SUIT;
  font-size: 18rem;
  font-style: normal;
  font-weight: 400;
  line-height: 30.476px;
  letter-spacing: -0.708px;

  @media (max-width: 26.75rem) {
    font-size: 11rem;
    line-height: 19px;
  }
`;
