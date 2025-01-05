import React from 'react';
import './Header.css';

type HeaderProps = {
  placeholder: string;
  presentationName: string;
  setPresentationName: (name: string) => void;
  addSlide: () => void;
  removeSlide: () => void;
  changeSlideBackground: (color: string) => void;
  addImageToSlide: (imageUrl: string) => void;
};

const Header: React.FC<HeaderProps> = ({
  placeholder,
  presentationName,
  setPresentationName,
  addSlide,
  removeSlide,
  changeSlideBackground,
  addImageToSlide,
}) => {
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeSlideBackground(event.target.value);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          addImageToSlide(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPresentationName(event.target.value);
  };

  return (
    <header className="header">
      <div className="instrumental_panel">
        <i>Instrumental Panel</i>
        <input
          type="text"
          className="presentation_name"
          placeholder={placeholder}
          value={presentationName}
          onChange={handleNameChange}
        />
        <button onClick={addSlide}>Add Slide</button>
        <button onClick={removeSlide}>Remove Slide</button>
        <label htmlFor="background-color" className="color-button">
          Change Background
          <input
            id="background-color"
            type="color"
            onChange={handleColorChange}
            style={{ display: 'none' }}
          />
        </label>
        <label htmlFor="upload-image" className="image-upload-button">
          Add Image
          <input
            id="upload-image"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </label>
      </div>
    </header>
  );
};

export default Header;
