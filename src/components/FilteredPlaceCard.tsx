import { useEffect, useState } from 'react';

import { getBarrierFreeInfo } from '@/apis/public/search';
import { MAP_FACILITIES_API_KEY } from '@/constants/facilities';
import { getFilterList } from '@/views/Search/constants/category';
import { filterState } from '@/views/Search/types/category';

import PlaceCard from './PlaceCard';

interface PlaceCardProps {
  filterState: filterState;
  contentid: string;
  placeName: string;
  address: string;
  imgSrc: string;
  onClickHeart?: () => void;
  isHeart: boolean;
}

const FilteredPlaceCard = (props: PlaceCardProps) => {
  const { filterState, contentid, ...restProps } = props;

  const [isShown, setIsShown] = useState(false);

  const isPlaceShown = async (contentId: number) => {
    const barrierFreeInfo = await getBarrierFreeInfo({
      MobileOS: 'ETC',
      contentId,
    });
    const filterList = getFilterList(filterState);

    if (barrierFreeInfo === '') {
      if (filterList.length === 0) setIsShown(true);
      else return setIsShown(false);
    } else {
      setIsShown(
        filterList.every(
          (facility) =>
            barrierFreeInfo.item[0][MAP_FACILITIES_API_KEY[facility]] !== '',
        ),
      );
    }
  };

  useEffect(() => {
    isPlaceShown(Number(contentid));
  }, [filterState]);

  return (
    isShown && (
      <li>
        <PlaceCard {...restProps} />
      </li>
    )
  );
};

export default FilteredPlaceCard;
