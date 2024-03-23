import { useIsMobile } from '@src/hooks/useDevice';
import * as S from './style';

export default function RecruitMessage() {
  const isMobileSize = useIsMobile('768px');

  return (
    <S.Background>
      <S.Title>솝트의 34번째 열정{isMobileSize && <br />}이 되어주세요!</S.Title>
      <S.Description>
        아직 모집기간이 아니예요.{isMobileSize && <br />}알림 신청을 하시면, 봄에 찾아갈게요!
      </S.Description>
      <S.GoToRecruit>모집시 알림 받기</S.GoToRecruit>
    </S.Background>
  );
}
