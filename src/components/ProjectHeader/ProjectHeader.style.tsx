import styled from '@emotion/styled';

interface StyleProps {
  src: string;
}

interface MenuTitleProps {
  isSelected: boolean;
}

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: fixed;
  top: 0; */
  z-index: 9;
  width: calc(100% - 360px);
  min-height: 100px;
  margin: 0 auto;
`;

export const CenterAligner = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.button<StyleProps>`
  background: url(${({ src }) => src}) center no-repeat;
  background-size: 100% 100%;
  cursor: pointer;

  width: 125px;
  height: 41px;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    width: 97px;
    height: 31px;
  }
`;

export const MenuTitlesWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const MenuTitle = styled.a<MenuTitleProps>`
  font-family: 'SUIT';
  font-size: 18px;
  line-height: 36px;
  font-weight: ${({ isSelected }) => (isSelected ? '700' : '500')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
  &:not(:last-child) {
    padding-right: 40px;
  }
`;
