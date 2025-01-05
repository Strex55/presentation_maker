import React from 'react';
import './SlideList.css';

type Slide = {
  id: string;
  title: string;
};

type SlideListProps = {
  slides: Slide[];
  currentSlideId: string | null;
  setCurrentSlideId: (id: string) => void;
};

const SlideList: React.FC<SlideListProps> = ({ slides, currentSlideId, setCurrentSlideId }) => {
  return (
    <div className="slide_list">
      <ul>
        {slides.map((slide) => (
          <li
            key={slide.id}
            className={`slide_item ${slide.id === currentSlideId ? 'active' : ''}`}
            onClick={() => setCurrentSlideId(slide.id)}
          >
            {slide.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlideList;
