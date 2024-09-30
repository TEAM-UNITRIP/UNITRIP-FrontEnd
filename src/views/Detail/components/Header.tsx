import { css } from '@emotion/react';
import { useState } from 'react';

import { ArrowLeftIcon, HeartFilledIcon, HeartGrayIcon } from '@/assets/icon';
import LoginModal from '@/components/LoginModal';

function Header() {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [activateModal, setActivateModal] = useState(false);

  const isLoggedIn = sessionStorage.getItem('kakao_id');

  const favoriteOnClick = () => {
    if (isLoggedIn) {
      setIsFavorite(!isFavorite);
    } else {
      setActivateModal(true);
    }
  };

  const closeModal = () => {
    setActivateModal(false);
  };

  return (
    <>
      <header css={headerContainer}>
        <button type="button">
          <ArrowLeftIcon />
        </button>
        <button type="button" onClick={favoriteOnClick}>
          {isFavorite ? <HeartFilledIcon /> : <HeartGrayIcon />}
        </button>
      </header>
      {activateModal && <LoginModal onClick={closeModal} />}
    </>
  );
}

export default Header;

const headerContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4.8rem;
  padding: 1.2rem 2rem;

  background-color: transparent;
`;
