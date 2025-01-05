import React from 'react';
import './SlidePlate.css';
type SlidePlateProps = {
  children: React.ReactNode;
};

const SlidePlate: React.FC<SlidePlateProps> = ({ children }) => (
  <div className="slide_plate">{children}</div>
);

export default SlidePlate;
