import React from 'react';
import Header from './components/Header';
import SlideList from './components/SlideList';
import SlidePlate from './components/SlidePlate';
import WorkingTable from './components/WorkingTable';

// Типы пропсов
type AppProps = {};

// Главный компонент приложения
const App: React.FC<AppProps> = () => {
  const slides = [
    'Slide 1',
    'Slide 2',
    'Slide 3',
    'Slide 4',
    'Slide 5',
    'Slide 6',
    'Slide 7',
    'Slide 8',
    'Slide 9',
    'Slide 10',
  ];

  return (
    <div>
      <Header title="Presentation Maker" />
      <main style={{ display: 'flex' }}>
        <SlideList slides={slides} />
        <SlidePlate>
          <WorkingTable />
        </SlidePlate>
      </main>
    </div>
  );
};

export default App;
