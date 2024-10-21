import React, { useState, useRef, useEffect } from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';


const Timeline = () => {
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      I am Vasyl.
      <br/>
      I have lived by stealing so far.
      </SectionText>
    </Section>
  );
};

export default Timeline;
