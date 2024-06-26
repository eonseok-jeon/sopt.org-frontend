import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Wrapper = styled.section`
  width: 100%;
  margin-top: 188px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* 태블릿 뷰 */
  @media (max-width: 58.6875rem) and (min-width: 48rem) {
    margin-top: 188px;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
    margin-top: 76px;
  }
`;

export const Container = styled.main`
  width: 900px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  /* 태블릿, 모바일 뷰 */
  @media (max-width: 58.6875rem) {
    margin-left: 20px;
    margin-right: 20px;
    width: 100%;
  }
`;

export const TabContainer = styled.section`
  display: flex;
  align-items: center;
`;

export const TabTitle = styled.article<{ isSelected: boolean }>`
  font-size: 24rem;
  height: 100%;
  line-height: 36px;
  font-weight: 700;
  letter-spacing: -0.48px;

  color: ${({ isSelected }) => (isSelected ? `${colors.gray30}` : `${colors.gray300}`)};

  cursor: pointer;
  position: relative;
  border-bottom: ${({ isSelected }) => isSelected && `2px solid ${colors.gray200}`};

  padding-bottom: 16px;
  margin-right: 20px;

  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
    border-bottom: ${({ isSelected }) => isSelected && `1px solid ${colors.gray200}`};
    margin-right: 12px;
    font-size: 18rem;
    padding-bottom: 6px;
  }

  &:hover {
    color: ${colors.gray100};
  }
`;

export const TabDescription = styled.h1`
  margin-top: 24px;
  margin-bottom: 48px;
  word-break: keep-all;

  font-size: 20rem;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.4px;
  color: ${colors.gray100};
  width: 100%;

  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
    margin-top: 14px;
    margin-bottom: 16px;
    display: flex;

    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 12px;
    background: ${colors.gray800};

    font-size: 14rem;
    font-weight: 500;
    line-height: 23.1px;
    letter-spacing: -0.21px;
    color: ${colors.gray30};
  }
`;

export const SelectContainer = styled.section`
  display: flex;
  gap: 6px;
`;
