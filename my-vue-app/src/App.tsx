import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import SlideList from './components/SlideList/SlideList';
import WorkingTable from './components/WorkingTable/WorkingTable';
import styles from './App.module.css';

type Slide = {
  id: string;
  title: string;
  background: string;
  textFields: { id: string; value: string; x: number; y: number }[];
  images: string[];
};

const App: React.FC = () => {
  const [presentationName, setPresentationName] = useState<string>('My Presentation');
  const [slides, setSlides] = useState<Slide[]>([
    {
      id: '1',
      title: 'Slide 1',
      background: '#ffffff',
      textFields: [],
      images: [],
    },
  ]);
  const [currentSlideId, setCurrentSlideId] = useState<string | null>(slides[0]?.id || null);

  useEffect(() => {
    document.title = presentationName;
  }, [presentationName]);

  const addSlide = () => {
    const newSlide: Slide = {
      id: `${Date.now()}`,
      title: `Slide ${slides.length + 1}`,
      background: '#ffffff',
      textFields: [],
      images: [],
    };
    setSlides((prevSlides) => [...prevSlides, newSlide]);
    setCurrentSlideId(newSlide.id);
  };

  const removeSlide = () => {
    if (currentSlideId) {
      setSlides((prevSlides) => {
        const updatedSlides = prevSlides.filter((slide) => slide.id !== currentSlideId);
        const newCurrentSlideId =
          updatedSlides.length > 0 ? updatedSlides[updatedSlides.length - 1].id : null;
        setCurrentSlideId(newCurrentSlideId);
        return updatedSlides;
      });
    }
  };

  const changeSlideBackground = (color: string) => {
    if (currentSlideId) {
      setSlides((prevSlides) =>
        prevSlides.map((slide) =>
          slide.id === currentSlideId ? { ...slide, background: color } : slide
        )
      );
    }
  };

  const addTextField = () => {
    if (currentSlideId) {
      setSlides((prevSlides) =>
        prevSlides.map((slide) =>
          slide.id === currentSlideId
            ? {
              ...slide,
              textFields: [
                ...slide.textFields,
                { id: `${Date.now()}`, value: '', x: 50, y: 50 },
              ],
            }
            : slide
        )
      );
    }
  };

  const addImageToSlide = (imageUrl: string) => {
    if (currentSlideId) {
      setSlides((prevSlides) =>
        prevSlides.map((slide) =>
          slide.id === currentSlideId
            ? { ...slide, images: [...slide.images, imageUrl] }
            : slide
        )
      );
    }
  };

  const updateTextField = (fieldId: string, value: string) => {
    if (currentSlideId) {
      setSlides((prevSlides) =>
        prevSlides.map((slide) =>
          slide.id === currentSlideId
            ? {
              ...slide,
              textFields: slide.textFields.map((field) =>
                field.id === fieldId ? { ...field, value } : field
              ),
            }
            : slide
        )
      );
    }
  };

  const updateTextFieldPosition = (fieldId: string, x: number, y: number) => {
    if (currentSlideId) {
      setSlides((prevSlides) =>
        prevSlides.map((slide) =>
          slide.id === currentSlideId
            ? {
              ...slide,
              textFields: slide.textFields.map((field) =>
                field.id === fieldId ? { ...field, x, y } : field
              ),
            }
            : slide
        )
      );
    }
  };

  const reorderSlides = (updatedSlides: Slide[]) => {
    setSlides(updatedSlides);
  };

  return (
    <div className={styles.app}>
      <Header
        placeholder="Enter Presentation Name"
        presentationName={presentationName}
        setPresentationName={setPresentationName}
        addSlide={addSlide}
        removeSlide={removeSlide}
        changeSlideBackground={changeSlideBackground}
        addImageToSlide={addImageToSlide}
        addTextField={addTextField}
      />
      <div className={styles.main_container}>
        <SlideList
          slides={slides}
          currentSlideId={currentSlideId}
          setCurrentSlideId={setCurrentSlideId}
          reorderSlides={reorderSlides}
        />
        <WorkingTable
          currentSlideId={currentSlideId}
          slides={slides}
          updateTextField={updateTextField}
          updateTextFieldPosition={updateTextFieldPosition}
        />
      </div>
    </div>
  );
};

export default App;
