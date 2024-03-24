import useInView from '@src/hooks/useInView';
import Activity from '@src/views/MainPage/components/Activity';
import OwnOrganization from '@src/views/MainPage/components/OwnOrganization';
import PartConfig from '@src/views/MainPage/components/PartConfig';
import Comment from '../Comment';
import * as S from './style';

interface SectionInView {
  activityInView: ReturnType<typeof useInView>;
  partInView: ReturnType<typeof useInView>;
  teamInView: ReturnType<typeof useInView>;
  reviewInView: ReturnType<typeof useInView>;
}

export default function ActivitySection({
  activityInView,
  partInView,
  teamInView,
  reviewInView,
}: SectionInView) {
  return (
    <S.Wrapper>
      <Activity ref={activityInView.ref} />
      <PartConfig ref={partInView.ref} />
      <OwnOrganization ref={teamInView.ref} />
      <Comment ref={reviewInView.ref} />
    </S.Wrapper>
  );
}
