import React from 'react';
import styles from './WorkingTable.module.css';

type TextField = {
  id: string;
  value: string;
  x: number;
  y: number;
};

type Slide = {
  id: string;
  background: string;
  textFields: TextField[];
  images: string[];
};

type WorkingTableProps = {
  currentSlideId: string | null;
  slides: Slide[];
  updateTextField: (fieldId: string, value: string) => void;
  updateTextFieldPosition: (fieldId: string, x: number, y: number) => void;
};

const WorkingTable: React.FC<WorkingTableProps> = ({
  currentSlideId,
  slides,
  updateTextField,
  updateTextFieldPosition,
}) => {
  const currentSlide = slides.find((slide) => slide.id === currentSlideId);

  if (!currentSlide) {
    return (
      <div className={styles.working_table}>
        No slide selected. Add or select a slide to start editing.
      </div>
    );
  }

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, field: TextField) => {
    e.dataTransfer.setData(
      'application/json',
      JSON.stringify({
        id: field.id,
        offsetX: e.clientX - field.x,
        offsetY: e.clientY - field.y,
      })
    );
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const data = e.dataTransfer.getData('application/json');
    if (!data) return;

    const { id, offsetX, offsetY } = JSON.parse(data);
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    updateTextFieldPosition(id, x, y);
  };

  return (
    <div
      className={styles.working_table}
      style={{ backgroundColor: currentSlide.background }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className={styles.content_wrapper}>
        {currentSlide.textFields.map((field) => (
          <div
            key={field.id}
            className={styles.text_field}
            style={{
              position: 'absolute',
              left: `${field.x}px`,
              top: `${field.y}px`,
            }}
            draggable
            onDragStart={(e) => handleDragStart(e, field)}
          >
            <textarea
              value={field.value}
              onChange={(e) => updateTextField(field.id, e.target.value)}
              placeholder="Type here..."
              className={styles.textarea}
            />
          </div>
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
