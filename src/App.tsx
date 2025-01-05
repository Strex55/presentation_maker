import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import SlideList from './components/SlideList/SlideList';
import WorkingTable from './components/WorkingTable/WorkingTable';
import './App.css';

type Slide = {
  id: string;
  title: string;
  background: string;
  text: string;
  images: string[];
};

const App: React.FC = () => {
  const [presentationName, setPresentationName] = useState<string>('My Presentation');
  const [slides, setSlides] = useState<Slide[]>([
    { id: '1', title: 'Slide 1', background: '#ffffff', text: '', images: [] },
    { id: '2', title: 'Slide 2', background: '#ffffff', text: '', images: [] },
    { id: '3', title: 'Slide 3', background: '#ffffff', text: '', images: [] },
  ]);
  const [currentSlideId, setCurrentSlideId] = useState<string | null>(slides[0]?.id || null);

  useEffect(() => {
    document.title = presentationName; // Обновление заголовка вкладки
  }, [presentationName]);

  const addSlide = () => {
    const newSlide: Slide = {
      id: `${Date.now()}`,
      title: `Slide ${slides.length + 1}`,
      background: '#ffffff',
      text: '',
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

  const updateSlideText = (text: string) => {
    if (currentSlideId) {
      setSlides((prevSlides) =>
        prevSlides.map((slide) =>
          slide.id === currentSlideId ? { ...slide, text } : slide
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

  return (
    <div className="app">
      <Header
        placeholder="Enter Presentation Name"
        presentationName={presentationName}
        setPresentationName={setPresentationName}
        addSlide={addSlide}
        removeSlide={removeSlide}
        changeSlideBackground={changeSlideBackground}
        addImageToSlide={addImageToSlide}
      />
      <div className="main_container">
        <SlideList
          slides={slides}
          currentSlideId={currentSlideId}
          setCurrentSlideId={setCurrentSlideId}
        />
        <WorkingTable
          currentSlideId={currentSlideId}
          slides={slides}
          updateSlideText={updateSlideText}
        />
      </div>
    </div>
  );
};

export default App;
