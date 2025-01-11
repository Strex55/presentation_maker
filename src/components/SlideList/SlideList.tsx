import React from 'react';
import styles from './SlideList.module.css';

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
    <div className={styles.slide_list}>
      <ul>
        {slides.map((slide) => (
          <li
            key={slide.id}
            className={`${styles.slide_item} ${
              slide.id === currentSlideId ? styles.active : ''
            }`}
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
