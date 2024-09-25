export interface detailWithTour1ResItem {
  wheelchair: string;
  exit: string;
  elevator: string;
  restroom: string;
  guidesystem: string;
  blindhandicapetc: string;
  signguide: string;
  videoguide: string;
  hearingroom: string;
  hearinghandicapetc: string;
  stroller: string;
  lactationroom: string;
  babysparechair: string;
  infantsfamilyetc: string;
  auditorium: string;
  room: string;
  handicapetc: string;
  braileblock: string;
  helpdog: string;
  guidehuman: string;
  audioguide: string;
  bigprint: string;
  brailepromotion: string;
  contentid: string;
  parking: string;
  route: string;
  publictransport: string;
  ticketoffice: string;
  promotion: string;
}

export interface detailWithTour11Res {
  header: {
    resultCode: string;
    resultMsg: string;
  };
  body: {
    numOfRows: number;
    pageNo: number;
    totalCount: number;
    items: {
      item: detailWithTour1ResItem[];
    };
  };
}
