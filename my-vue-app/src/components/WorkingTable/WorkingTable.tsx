import React from 'react';
import styles from './WorkingTable.module.css';
import { Slide } from '../../data/data';

type TextField = {
  id: string;
  value: string;
  x: number;
  y: number;
};

type WorkingTableProps = {
  currentSlideId: string | null;
  slides: Slide[];
  updateTextField: (fieldId: string, value: string) => void;
  updateTextFieldPosition: (fieldId: string, x: number, y: number) => void;
  updateImagePosition: (imageIndex: number, x: number, y: number) => void;
};

const WorkingTable: React.FC<WorkingTableProps> = ({
  currentSlideId,
  slides,
  updateTextField,
  updateTextFieldPosition,
  updateImagePosition,
}) => {
  const currentSlide = slides.find((slide) => slide.id === currentSlideId);

  if (!currentSlide) {
    return (
      <div className={styles.working_table}>
        No slide selected. Add or select a slide to start editing.
      </div>
    );
  }

  const handleDragStartText = (
    e: React.DragEvent<HTMLDivElement>,
    field: TextField
  ) => {
    e.dataTransfer.setData(
      'text/plain',
      JSON.stringify({
        id: field.id,
        type: 'text',
        offsetX: e.clientX - field.x,
        offsetY: e.clientY - field.y,
      })
    );
  };

  const handleDragStartImage = (
    e: React.DragEvent<HTMLImageElement>,
    index: number,
    x: number,
    y: number
  ) => {
    e.dataTransfer.setData(
      'text/plain',
      JSON.stringify({
        id: index,
        type: 'image',
        offsetX: e.clientX - x,
        offsetY: e.clientY - y,
      })
    );
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const data = e.dataTransfer.getData('text/plain');
    if (!data) return;

    const parsedData = JSON.parse(data);

    if (parsedData.type === 'text') {
      updateTextFieldPosition(
        parsedData.id,
        e.clientX - parsedData.offsetX,
        e.clientY - parsedData.offsetY
      );
    } else if (parsedData.type === 'image') {
      updateImagePosition(
        parsedData.id,
        e.clientX - parsedData.offsetX,
        e.clientY - parsedData.offsetY
      );
    }
  };

  return (
    <div
      className={styles.working_table}
      style={{
        backgroundColor:
          typeof currentSlide.background === 'string'
            ? currentSlide.background
            : currentSlide.background.type === 'color'
            ? currentSlide.background.color
            : 'transparent',
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
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
          onDragStart={(e) => handleDragStartText(e, field)}
        >
          <textarea
            value={field.value}
            onChange={(e) => updateTextField(field.id, e.target.value)}
            placeholder="Type here..."
            className={styles.textarea}
          />
        </div>
      ))}
      {currentSlide.images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`Slide Image ${index + 1}`}
          className={styles.slide_image}
          style={{
            position: 'absolute',
            left: `${image.x}px`,
            top: `${image.y}px`,
          }}
          draggable
          onDragStart={(e) =>
            handleDragStartImage(e, index, image.x, image.y)
          }
        />
      ))}
    </div>
  );
};

export default WorkingTable;
