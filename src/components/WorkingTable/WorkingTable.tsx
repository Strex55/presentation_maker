import React from 'react';
import styles from './WorkingTable.module.css';

type Slide = {
  id: string;
  background: string;
  text: string;
  images: string[];
};

type WorkingTableProps = {
  currentSlideId: string | null;
  slides: Slide[];
  updateSlideText: (text: string) => void;
};

const WorkingTable: React.FC<WorkingTableProps> = ({
  currentSlideId,
  slides,
  updateSlideText,
}) => {
  const currentSlide = slides.find((slide) => slide.id === currentSlideId);

  if (!currentSlide) {
    return <div className={styles.working_table}>No slide selected. Add or select a slide to start editing.</div>;
  }

  return (
    <div
      className={styles.working_table}
      style={{ backgroundColor: currentSlide.background }}
    >
      <div className={styles.content_wrapper}>
        <textarea
          value={currentSlide.text}
          onChange={(e) => updateSlideText(e.target.value)}
          className={styles.presentation_text}
          placeholder="Type some text"
        />
        <div className={styles.slide_images}>
          {currentSlide.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide Image ${index + 1}`}
              className={styles.slide_image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingTable;