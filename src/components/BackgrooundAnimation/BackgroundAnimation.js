import React from 'react';
import { Img } from './BackgroundStyles';
import { avatars } from '../../constants/constants';

const BackgroundAnimation = () => (
  <div>
    <Img src={avatars[1].image} />

  </div>
);

export default BackgroundAnimation;