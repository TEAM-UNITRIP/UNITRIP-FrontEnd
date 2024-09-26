import { useEffect, useState } from 'react';

import { MAP_FACILITIES_API_KEY } from '@/constants/facilities';
import { BarrierFreeItem, SearchResItem } from '@/types/search';
import { getFilterList } from '@/views/Search/constants/category';
import { filterState } from '@/views/Search/types/category';

import PlaceCard from './PlaceCard';

interface PlaceCardProps {
  filterState: filterState;
  contentid: string;
  placeInfo?: SearchResItem & BarrierFreeItem;
  placeName: string;
  address: string;
  imgSrc: string;
  onClickHeart?: () => void;
  isHeart: boolean;
}

const FilteredPlaceCard = (props: PlaceCardProps) => {
  const { filterState, placeInfo, ...restProps } = props;

  const [isShown, setIsShown] = useState(false);

  const isPlaceShown = async () => {
    const filterList = getFilterList(filterState);

    if (!placeInfo) return;
    setIsShown(
      filterList.every(
        (facility) => placeInfo[MAP_FACILITIES_API_KEY[facility]] !== '',
      ),
    );
  };

  useEffect(() => {
    isPlaceShown();
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
