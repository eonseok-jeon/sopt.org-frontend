import styled from '@emotion/styled';

export const CurriculumSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  margin-top: 275px;

  /* 태블릿 뷰 */
  @media (max-width: 48rem) {
    gap: 19px;
    margin-top: 190px;
  }

  /* 모바일 뷰 */
  @media (max-width: 26.75rem) {
    gap: 13.44px;
    margin-top: 120px;
  }
`;
