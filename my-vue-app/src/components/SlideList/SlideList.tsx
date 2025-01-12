import React from 'react';
import styles from './SlideList.module.css';

type Slide = {
  id: string;
  title: string;
  background: string;
  textFields: { id: string; value: string; x: number; y: number }[];
  images: string[];
};

type SlideListProps = {
  slides: Slide[];
  currentSlideId: string | null;
  setCurrentSlideId: (id: string) => void;
  reorderSlides: (updatedSlides: Slide[]) => void;
};

const SlideList: React.FC<SlideListProps> = ({ slides, currentSlideId, setCurrentSlideId, reorderSlides }) => {
  const handleDragStart = (event: React.DragEvent<HTMLLIElement>, slideId: string) => {
    event.dataTransfer.setData('text/plain', slideId);
  };

  const handleDrop = (event: React.DragEvent<HTMLLIElement>, targetSlideId: string) => {
    event.preventDefault();
    const draggedSlideId = event.dataTransfer.getData('text/plain');

    if (draggedSlideId !== targetSlideId) {
      const draggedIndex = slides.findIndex((slide) => slide.id === draggedSlideId);
      const targetIndex = slides.findIndex((slide) => slide.id === targetSlideId);

      const updatedSlides = [...slides];
      const [draggedSlide] = updatedSlides.splice(draggedIndex, 1);
      updatedSlides.splice(targetIndex, 0, draggedSlide);

      reorderSlides(updatedSlides);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLLIElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.slide_list}>
      <ul>
        {slides.map((slide) => (
          <li
            key={slide.id}
            className={`${styles.slide_item} ${slide.id === currentSlideId ? styles.active : ''}`}
            draggable
            onDragStart={(event) => handleDragStart(event, slide.id)}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, slide.id)}
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
