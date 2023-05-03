import React from 'react';
import { useNavigate } from 'react-router-dom';

import NameComponent from '../AnimatedComponents/NameComponent';
import { HI_TEXT, HOME_TEXT, MORE_ABOUT_ME, NAME } from './Constants';
import Icons from './Icons/Icons';

export const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='homeComponent' >
      <div className='centerContainer px-5'>
        <div className='d-flex'>
          <div className='greetingText'>
            {HI_TEXT}
          </div>
          <div className='ps-2'>
            <NameComponent text={NAME} />
          </div>
        </div>
        <div className='personalDescription'>
          <div>
            {HOME_TEXT}
          </div>
        </div>
        <div onClick={() => { navigate('/about') }} className='moreAbout'>
          <div>
            {MORE_ABOUT_ME} <span><Icons type="rightArrow" /></span>
          </div>
        </div>
      </div>
    </div>
  )
}

