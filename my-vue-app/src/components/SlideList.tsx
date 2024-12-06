import React from 'react';
import './SlideList.css';
type SlideListProps = {
  slides: string[];
};

const SlideList: React.FC<SlideListProps> = ({ slides }) => (
  <ul className="slide_list">
    <i>slide list</i>
    {slides.map((slide, index) => (
      <li className="slide_n" key={index}>
        <i>{slide}</i>
      </li>
    ))}
  </ul>
);

export default SlideList;
