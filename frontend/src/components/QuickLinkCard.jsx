import React from 'react';
import { Link } from 'react-router-dom';

const QuickLinkCard = (props) => (
  <div className={`link-card ${props.isHidden && 'hidden'}`}>
    <div className="link-card__wrapper">
      <div className="link-card__wrapper__content">
        <div className='animated-bground' />
        <div className='text-box'>
          <h3>Undergraduates</h3>
          <p className='info'>The 2019/2020 session starts on the 15th of September. The portal closes on 30th of November.</p>
          <div className="btns-div">
            <Link to='/login' className='link-btns'>Returning Students</Link>
            <Link to='/signup' className='link-btns'>New Students</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default QuickLinkCard;