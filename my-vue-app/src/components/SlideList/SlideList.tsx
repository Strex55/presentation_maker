import React from 'react';
import './SlideList.css';

type SlideListProps = {
  slides: string[];
};

const SlideList: React.FC<SlideListProps> = ({ slides }) => {
  return (
    <div className="slide_list">
      <ul>
        {slides.map((slide, index) => (
          <li key={index} className="slide_item">
            {slide}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlideList;
