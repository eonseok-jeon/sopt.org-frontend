import { Part } from '@src/lib/types/universal';

export const infoMap: Record<Part, { info: string; fit: string[] }> = {
  [Part.PLAN]: {
    info: '고객 시장 탐색부터 프로덕트 설계와 운영까지, 더블 다이아몬드 프로세스를 이용하여 더욱 탄탄한 프로덕트를 설계해볼 수 있습니다.',
    fit: [
      '어려움과 고민을 편하게 나누고 공감할 수 있는 유대감과 열린 마음을 가진 분',
      '타 파트와 협업하며 존중과 신뢰를 바탕으로 원활한 팀워크를 만들어갈 수 있는 분',
      '도전과 성장의 자세로 한계를 두지 않고 앞으로 나아가고자 하는 열정이 있는 분',
      '본인이 가진 지식과 경험을 아낌없이 공유하고, 책임감을 가지고 팀 활동에 임할 수 있는 분',
    ],
  },
  [Part.DESIGN]: {
    info: 'UX 설계, UI, GUI, 브랜딩, 인터랙션 디자인 등 프로덕트 디자인의 전 과정을 학습하며 기획자, 개발자와의 체계적인 협업 방식을 통해 문제의 근원을 주도적으로 해결합니다.',
    fit: [
      '사용자 관점에서 프로덕트를 설계한 경험이 있으신 분',
      '원활한 커뮤니케이션을 위해 수용적 태도를 지니고 계신 분',
      '자신의 경험을 공유하는 것을 즐기고 팀원들과의 상호 성장에서 오는 기쁨을 아시는 분',
      '화합의 가치를 알고 중요시하며 네트워킹을 즐기시는 분',
    ],
  },
  [Part.ANDROID]: {
    info: 'Kotlin을 활용해 UI 구현 및 서버 통신 등 안드로이드 개발에 대한 전반적인 지식을 학습하며, 기획, 디자인, 서버 파트와의 협업을 통해 열정이 담긴 IT 서비스를 출시하는 경험을 할 수 있습니다.',
    fit: [
      '같이의 가치를 알고 함께 도전하며 성장하실 수 있으신 분',
      '주어진 일에 책임을 다하기 위해서 끊임없이 노력하시는 분',
      '자신의 지식과 경험 아낌없이 나누며 타인에게 긍정적인 영향을 미치는 분',
      '존중과 배려를 바탕으로 사람들과 소통하며 협업할 줄 아시는 분',
    ],
  },
  [Part.IOS]: {
    info: 'UIKit & SwiftUI를 활용한 앱 개발을 진행하며 본인의 프로젝트를 직접 기획하고 개발하는 경험을 얻습니다.',
    fit: [
      '진심으로 도전하는 마음가짐과 그에 대한 근거가 있으신 분',
      '폭발적인 성장 가능성을 가지고 계신 분',
      '원활한 커뮤니케이션이 가능하신 분',
      '프로덕트에 대한 관심이 많으신 분',
    ],
  },
  [Part.WEB]: {
    info: 'React를 활용한 웹 서비스 개발을 기초부터 심화까지 학습하며, 협업 과정에서는 기획자, 디자이너, 서버 개발자와의 원활한 소통 방법을 배웁니다. 이를 통해 최종적으로 자신만의 웹 서비스를 출시하는 것을 목표로 합니다.',
    fit: [
      '웹 프론트엔드 개발에 관심을 가지고 명확한 목표와 함께 꾸준히 노력하시는 분',
      '지식과 경험을 공유하며 상호 성장의 가치를 알고, 함께 성장하고 싶으신 분',
      '적극적이고 활발하게 SOPT와 웹 파트 활동에 참여하실 분',
      '팀워크를 중요시하며 다른 파트원들과의 협업을 통해 성과를 이루고 싶으신 분',
    ],
  },
  [Part.SERVER]: {
    info: '설계와 의사소통을 배우며, Spring framework 로 application 을 구현합니다.',
    fit: [
      '어려워도 끝까지 파내실분',
      '다른 분들이 뒤쳐지지않도록 도움을 줄 수 있는 분',
      '소통이 매끄럽고, 분위기를 즐길수 있는 분',
    ],
  },
};
