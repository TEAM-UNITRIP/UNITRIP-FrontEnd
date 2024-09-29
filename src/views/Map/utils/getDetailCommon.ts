import { getDetailCommon1 } from '@/apis/public/detailCommon1';

import { contentIdListType } from './createFavoritePin';

export interface favoriteListType {
  title: string;
  address: string;
  image: string;
  mapX: string;
  mapY: string;
  contentId: string;
}

export const getDetailCommonRes = async (
  contentIdList: contentIdListType[],
) => {
  const favoriteList: favoriteListType[] = [];

  const promises = contentIdList.map(async (id) => {
    const response = await getDetailCommon1({
      numOfRows: 20,
      pageNo: 1,
      MobileOS: 'ETC',
      contentId: Number(id.contentId),
      defaultYN: 'Y',
      firstImageYN: 'Y',
      addrinfoYN: 'Y',
      mapinfoYN: 'Y',
    });

    if (response) {
      favoriteList.push({
        title: response[0].title,
        address: response[0].addr1,
        image: response[0].firstimage,
        mapX: response[0].mapx,
        mapY: response[0].mapy,
        contentId: response[0].contentid,
      });
    }
  });

  await Promise.all(promises);

  if (favoriteList.length !== 0) {
    return { favoriteList };
  }
};
