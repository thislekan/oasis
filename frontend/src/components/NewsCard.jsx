import React from 'react';

const NewsCard = () => (
  <div className="card">
    <div className="card__wrapper">
      <div className='card__wrapper__card-topic'>
        <div className='date'>
          <p className='date__month content'>DEC</p>
          <p className='date__day'>29</p>
          <p className='date__year content'>2019</p>
        </div>
        <div className='topic-title'>
          <h4>SPORTS</h4>
          <hr className='line' />
        </div>
      </div>
      <div className='card__wrapper__card-title'>
        <h4 className='title'>Team Oasis wins scrabble at the NUGA games</h4>
      </div>
      <div className='card__wrapper__card-cover-image' />
    </div>
  </div>
);

export default NewsCard;
