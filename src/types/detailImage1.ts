export interface detailImage1ResItem {
  serialnum: string;
  smallimageurl: string;
  cpyrhtDivCd: string;
  contentid: string;
  imgname: string;
  originimgurl: string;
}

export interface detailImage1Res {
  header: {
    resultCode: string;
    resultMsg: string;
  };
  body: {
    numOfRows: number;
    pageNo: number;
    totalCount: number;
    items: {
      item: detailImage1ResItem[];
    };
  };
}
