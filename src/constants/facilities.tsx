import {
  AudioGuideActiveIcon,
  AudioGuideDefaultIcon,
  AudioGuideSelectedIcon,
  AuditoriumActiveIcon,
  AuditoriumDefaultIcon,
  AuditoriumInActiveIcon,
  AuditoriumSelectedIcon,
  BabySpareChairActiveIcon,
  BabySpareChairDefaultIcon,
  BabySpareChairInActiveIcon,
  BabySpareChairSelectedIcon,
  BigPrintActiveIcon,
  BigPrintDefaultIcon,
  BigPrintInActiveIcon,
  BigPrintSelectedIcon,
  BraileBlockActiveIcon,
  BraileBlockDefaultIcon,
  BraileBlockInActiveIcon,
  BraileBlockSelectedIcon,
  BrailePromotionActiveIcon,
  BrailePromotionDefaultIcon,
  BrailePromotionInActiveIcon,
  BrailePromotionSelectedIcon,
  ElevatorActiveIcon,
  ElevatorDefaultIcon,
  ElevatorInActiveIcon,
  ElevatorSelectedIcon,
  ExitActiveIcon,
  ExitDefaultIcon,
  ExitInActiveIcon,
  ExitSelectedIcon,
  GuideHumanActiveIcon,
  GuideHumanDefaultIcon,
  GuideHumanInActiveIcon,
  GuideHumanSelectedIcon,
  GuideSystemActiveIcon,
  GuideSystemDefaultIcon,
  GuideSystemInActiveIcon,
  GuideSystemSelectedIcon,
  HelpDogActiveIcon,
  HelpDogDefaultIcon,
  HelpDogInActiveIcon,
  HelpDogSelectedIcon,
  LactationRoomActiveIcon,
  LactationRoomDefaultIcon,
  LactationRoomInActiveIcon,
  LactationRoomSelectedIcon,
  ParkingActiveIcon,
  ParkingDefaultIcon,
  ParkingInActiveIcon,
  ParkingSelectedIcon,
  PromotionActiveIcon,
  PromotionDefaultIcon,
  PromotionInActiveIcon,
  PromotionSelectedIcon,
  PublicTransportActiveIcon,
  PublicTransportDefaultIcon,
  PublicTransportInActiveIcon,
  PublicTransportSelectedIcon,
  RestroomActiveIcon,
  RestroomDefaultIcon,
  RestroomInActiveIcon,
  RestroomSelectedIcon,
  RouteActiveIcon,
  RouteDefaultIcon,
  RouteInActiveIcon,
  RouteSelectedIcon,
  SignGuideActiveIcon,
  SignGuideDefaultIcon,
  SignGuideInActiveIcon,
  SignGuideSelectedIcon,
  StrollerActiveIcon,
  StrollerDefaultIcon,
  StrollerInActiveIcon,
  StrollerSelectedIcon,
  TicketOfficeActiveIcon,
  TicketOfficeDefaultIcon,
  TicketOfficeInActiveIcon,
  TicketOfficeSelectedIcon,
  VideoGuideActiveIcon,
  VideoGuideDefaultIcon,
  VideoGuideInActiveIcon,
  VideoGuideSelectedIcon,
  WheelChairAcitveIcon,
  WheelChairDefaultIcon,
  WheelChairInAcitveIcon,
  WheelChairSelectedIcon,
} from '@/assets/icon';

export interface Facility {
  name: string;
  active: JSX.Element;
  inactive: JSX.Element;
  default: JSX.Element;
  selected: JSX.Element;
}

export const PHYSICAL_FACILITIES: Facility[] = [
  {
    name: '주차장',
    active: <ParkingActiveIcon />,
    inactive: <ParkingInActiveIcon />,
    default: <ParkingDefaultIcon />,
    selected: <ParkingSelectedIcon />,
  },
  {
    name: '접근로',
    active: <RouteActiveIcon />,
    inactive: <RouteInActiveIcon />,
    default: <RouteDefaultIcon />,
    selected: <RouteSelectedIcon />,
  },
  {
    name: '대중교통',
    active: <PublicTransportActiveIcon />,
    inactive: <PublicTransportInActiveIcon />,
    default: <PublicTransportDefaultIcon />,
    selected: <PublicTransportSelectedIcon />,
  },
  {
    name: '매표소',
    active: <TicketOfficeActiveIcon />,
    inactive: <TicketOfficeInActiveIcon />,
    default: <TicketOfficeDefaultIcon />,
    selected: <TicketOfficeSelectedIcon />,
  },
  {
    name: '홍보물',
    active: <PromotionActiveIcon />,
    inactive: <PromotionInActiveIcon />,
    default: <PromotionDefaultIcon />,
    selected: <PromotionSelectedIcon />,
  },
  {
    name: '휠체어',
    active: <WheelChairAcitveIcon />,
    inactive: <WheelChairInAcitveIcon />,
    default: <WheelChairDefaultIcon />,
    selected: <WheelChairSelectedIcon />,
  },
  {
    name: '출입통로',
    active: <ExitActiveIcon />,
    inactive: <ExitInActiveIcon />,
    default: <ExitDefaultIcon />,
    selected: <ExitSelectedIcon />,
  },
  {
    name: '엘리베이터',
    active: <ElevatorActiveIcon />,
    inactive: <ElevatorInActiveIcon />,
    default: <ElevatorDefaultIcon />,
    selected: <ElevatorSelectedIcon />,
  },
  {
    name: '화장실',
    active: <RestroomActiveIcon />,
    inactive: <RestroomInActiveIcon />,
    default: <RestroomDefaultIcon />,
    selected: <RestroomSelectedIcon />,
  },
  {
    name: '관람석',
    active: <AuditoriumActiveIcon />,
    inactive: <AuditoriumInActiveIcon />,
    default: <AuditoriumDefaultIcon />,
    selected: <AuditoriumSelectedIcon />,
  },
];

export const VISUAL_FACILITIES: Facility[] = [
  {
    name: '점형/선형 블록',
    active: <BraileBlockActiveIcon />,
    inactive: <BraileBlockInActiveIcon />,
    default: <BraileBlockDefaultIcon />,
    selected: <BraileBlockSelectedIcon />,
  },
  {
    name: '안내견',
    active: <HelpDogActiveIcon />,
    inactive: <HelpDogInActiveIcon />,
    default: <HelpDogDefaultIcon />,
    selected: <HelpDogSelectedIcon />,
  },
  {
    name: '안내 요원',
    active: <GuideHumanActiveIcon />,
    inactive: <GuideHumanInActiveIcon />,
    default: <GuideHumanDefaultIcon />,
    selected: <GuideHumanSelectedIcon />,
  },
  {
    name: '오디오가이드',
    active: <AudioGuideActiveIcon />,
    inactive: <AudioGuideActiveIcon />,
    default: <AudioGuideDefaultIcon />,
    selected: <AudioGuideSelectedIcon />,
  },
  {
    name: '큰 활자',
    active: <BigPrintActiveIcon />,
    inactive: <BigPrintInActiveIcon />,
    default: <BigPrintDefaultIcon />,
    selected: <BigPrintSelectedIcon />,
  },
  {
    name: '점자 표지판',
    active: <BrailePromotionActiveIcon />,
    inactive: <BrailePromotionInActiveIcon />,
    default: <BrailePromotionDefaultIcon />,
    selected: <BrailePromotionSelectedIcon />,
  },
  {
    name: '유도·안내',
    active: <GuideSystemActiveIcon />,
    inactive: <GuideSystemInActiveIcon />,
    default: <GuideSystemDefaultIcon />,
    selected: <GuideSystemSelectedIcon />,
  },
];

export const HEARING_FACILITIES: Facility[] = [
  {
    name: '수화 안내',
    active: <SignGuideActiveIcon />,
    inactive: <SignGuideInActiveIcon />,
    default: <SignGuideDefaultIcon />,
    selected: <SignGuideSelectedIcon />,
  },
  {
    name: '자막',
    active: <VideoGuideActiveIcon />,
    inactive: <VideoGuideInActiveIcon />,
    default: <VideoGuideDefaultIcon />,
    selected: <VideoGuideSelectedIcon />,
  },
];

export const INFANT_FACILITIES: Facility[] = [
  {
    name: '유모차',
    active: <StrollerActiveIcon />,
    inactive: <StrollerInActiveIcon />,
    default: <StrollerDefaultIcon />,
    selected: <StrollerSelectedIcon />,
  },
  {
    name: '수유실',
    active: <LactationRoomActiveIcon />,
    inactive: <LactationRoomInActiveIcon />,
    default: <LactationRoomDefaultIcon />,
    selected: <LactationRoomSelectedIcon />,
  },
  {
    name: '유아용 의자',
    active: <BabySpareChairActiveIcon />,
    inactive: <BabySpareChairInActiveIcon />,
    default: <BabySpareChairDefaultIcon />,
    selected: <BabySpareChairSelectedIcon />,
  },
];
