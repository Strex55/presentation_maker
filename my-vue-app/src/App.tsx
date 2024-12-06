import React from 'react';
import Header from './components/Header';
import SlideList from './components/SlideList';
import WorkingTable from './components/WorkingTable';
import './App.css';

const App: React.FC = () => {
  const slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'];

  return (
    <div className="app">
      <Header placeholder="Enter Presentation Name" />
      <div className="main_container">
        <SlideList slides={slides} />
        <WorkingTable />
      </div>
    </div>
  );
};

export default App;
