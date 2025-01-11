import React from 'react';
import styles from './WorkingTable.module.css';

type Slide = {
  id: string;
  background: string;
  textFields: { id: string; value: string; x: number; y: number }[]; // Массив текстовых полей
  images: string[];
};

type WorkingTableProps = {
  currentSlideId: string | null;
  slides: Slide[];
  updateTextField: (fieldId: string, value: string) => void; // Новый метод
};

const WorkingTable: React.FC<WorkingTableProps> = ({
  currentSlideId,
  slides,
  updateTextField,
}) => {
  const currentSlide = slides.find((slide) => slide.id === currentSlideId);

  if (!currentSlide) {
    return (
      <div className={styles.working_table}>
        No slide selected. Add or select a slide to start editing.
      </div>
    );
  }

  return (
    <div
      className={styles.working_table}
      style={{ backgroundColor: currentSlide.background }}
    >
      <div className={styles.content_wrapper}>
        {currentSlide.textFields.map((field) => (
          <textarea
            key={field.id}
            value={field.value}
            className={styles.text_field}
            style={{ position: 'absolute', left: `${field.x}px`, top: `${field.y}px` }}
            onChange={(e) => updateTextField(field.id, e.target.value)} // Обновление текста
            placeholder="Type here..."
          />
        ))}
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
