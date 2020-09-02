import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useActions } from '../hooks/useActions';
import * as modalActions from '../actions/ModalActions';
import * as feedActions from '../actions/feedActions';

import ButtonsBar from '../components/atoms/ButtonsBar';
import IconButton from '../components/atoms/IconButton';
import Accordion from '../components/atoms/Accordion';
import Loader from '../components/atoms/Loader';
import Slider from '../components/organisms/Slider';
import FilterModal from '../components/organisms/FilterModal';
import MatchModal from '../components/organisms/MatchModal';

const totalActions = {
  ...modalActions,
  ...feedActions,
};

const RenderFeedComponents = ({ clothes }) => {
  if (!clothes) {
    return (
      <div>
        akii
      </div>
    );
  }

  return (
    <>
      <Slider />
      <Accordion
        location={clothes.owner_is.profile.city}

        // NameOwner={dataClothes.results[positionClothe].owner_is.first_name}
        // clothesName={dataClothes.results[positionClothe].category}
        // clothesGenre={dataClothes.results[positionClothe].gender}
        // clothesState={dataClothes.results[positionClothe].state}
        // clothesInfo={dataClothes.results[positionClothe].description}
        // clothesSize={dataClothes.results[positionClothe].size}
      />

    </>
  );
};

const Feed = () => {
  const MatchModalState = useSelector((state) => state.modalReducers.MatchModalState);
  const FilterModalState = useSelector((state) => state.modalReducers.FilterModalState);
  const clothesFeed = useSelector((state) => state.userReducer.clothesFeed);
  const positionClothe = useSelector((state) => state.userReducer.positionClothe);
  const loading = useSelector((state) => state.userReducer.loading);
  const actions = useActions(totalActions);

  useEffect(() => {
    actions.fetchClothesFeed();
  }, []);

  const nextClothe = () => {
    if (positionClothe === 2) {
      actions.fetchClothesFeed(clothesFeed.next);
      return;
    }
    actions.nextPositionClothe();
  };

  const handleOpenModal = () => {
    actions.turnModalState('FilterModal', true);
  };

  const handlelike = () => {
    actions.turnModalState('MatchModal', true);
    nextClothe();
  };

  const handleDislike = () => {
    alert('dislike');
    nextClothe();
  };

  const handleSuperlike = () => {
    alert('superlike');
    nextClothe();
  };

  const clothes = (!clothesFeed) ? null : clothesFeed.results[positionClothe];

  return (
    <section>
      <div className="feed">
        <div className="search-button">
          <IconButton
            iconName="search"
            space="40px"
            type="disabled"
            handleClick={() => handleOpenModal()}
          />
        </div>

        {loading && (
          <div className="row">
            <Loader />
          </div>
        )}

        <RenderFeedComponents clothes={clothes} />

        {clothes && (
          <ButtonsBar
            handleDislike={handleDislike}
            handleSuperlike={handleSuperlike}
            handlelike={handlelike}
          />
        )}
      </div>

      <MatchModal
        modalState={MatchModalState}
        onCloseModal={() => actions.turnModalState('MatchModal', false)}
        nameUserMatch="Vicente Fernández"
        closeButton
      />

      <FilterModal
        modalState={FilterModalState}
        onCloseModal={() => actions.turnModalState('FilterModal', false)}
        closeButton
      />
    </section>
  );
};

export default Feed;
