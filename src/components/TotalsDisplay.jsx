import React from 'react';
import { useSelector } from 'react-redux';

export const TotalsDisplay = (props) => {
  const totalCards = useSelector((store) => store.card.value);

  return (
    <div
      className='innerbox'
      id='totals'
    >
      <label htmlFor='totalCards'>Total Cards:</label>
      <span id='totalCards'>{totalCards}</span>
    </div>
  );
};
