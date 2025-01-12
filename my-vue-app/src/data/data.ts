//типы

// Основной тип для слайда
export type Slide = {
    id: string;
    title: string;
    background: Background; // Используем тип Background для фона
    textFields: TextField[]; // Массив текстовых полей
    images: ImageElement[]; // Массив изображений с позициями
};

// Основной тип для презентации
export type Presentation = {
    id: string;
    title: string;
    slides: Slide[]; // Слайды презентации
    currentSlideId: string | null; // ID текущего слайда (null, если ничего не выбрано)
};

// Тип для текстового поля
export type TextField = {
    id: string; // Уникальный идентификатор
    value: string; // Содержимое текста
    x: number; // Позиция по оси X
    y: number; // Позиция по оси Y
};

// Тип для изображения
export type ImageElement = {
    src: string; // Путь к изображению
    x: number; // Позиция по оси X
    y: number; // Позиция по оси Y
};

// Тип для позиции
export type Position = {
    x: number; // Позиция по оси X
    y: number; // Позиция по оси Y
};

// Тип для размера (ширина и высота)
export type Size = {
    width: number; // Ширина
    height: number; // Высота
};

export type Background =
    | { type: 'color'; color: string }
    | { type: 'image'; src: string }
    | { type: 'gradient'; colors: string[] }
    | string;
//функции

// export function changePresentationTitle(presentation: Presentation, newTitle: string): Presentation {
//     return { ...presentation, title: newTitle };
// }

// function addSlide(presentation: Presentation, newSlide: Slide): Presentation {
//     return { ...presentation, slides: [...presentation.slides, newSlide] };
// }
// function removeSlide(presentation: Presentation, slideId: string): Presentation {
//     const updatedSlides = presentation.slides.filter(slide => slide.id !== slideId);
//     return { ...presentation, slides: updatedSlides };
// }

// function moveSlide(presentation: Presentation, fromIndex: number, toIndex: number): Presentation {
//     const slides = [...presentation.slides];
//     const [movedSlide] = slides.splice(fromIndex, 1);
//     slides.splice(toIndex, 0, movedSlide);
//     return { ...presentation, slides };
// }

// function addElement(slide: Slide, newElement: SlideElement): Slide {
//     return { ...slide, elements: [...slide.elements, newElement] };
// }

// function removeElement(slide: Slide, elementId: string): Slide {
//     const updatedElements = slide.elements.filter(element => element.id !== elementId);
//     return { ...slide, elements: updatedElements };
// }

// function moveElement(slide: Slide, elementId: string, newPosition: Position): Slide {
//     const updatedElements = slide.elements.map(element =>
//         element.id === elementId
//             ? { ...element, position: newPosition }
//             : element
//     );
//     return { ...slide, elements: updatedElements };
// }

// function resizeElement(slide: Slide, elementId: string, newSize: Size): Slide {
//     const updatedElements = slide.elements.map(element =>
//         element.type === 'image' && element.id === elementId
//             ? { ...element, size: newSize }
//             : element
//     );
//     return { ...slide, elements: updatedElements };
// }

// function changeText(slide: Slide, textElementId: string, newText: string): Slide {
//     const updatedElements = slide.elements.map(element =>
//         element.type === 'text' && element.id === textElementId
//             ? { ...element, content: newText }
//             : element
//     );
//     return { ...slide, elements: updatedElements };
// }

// function changeFontSize(slide: Slide, textElementId: string, newSize: number): Slide {
//     const updatedElements = slide.elements.map(element =>
//         element.type === 'text' && element.id === textElementId
//             ? { ...element, fontSize: newSize }
//             : element
//     );
//     return { ...slide, elements: updatedElements };
// }

// function changeFontFamily(slide: Slide, textElementId: string, newFontFamily: string): Slide {
//     const updatedElements = slide.elements.map(element =>
//         element.type === 'text' && element.id === textElementId
//             ? { ...element, fontFamily: newFontFamily }
//             : element
//     );
//     return { ...slide, elements: updatedElements };
// }

// function changeSlideBackground(slide: Slide, newBackground: Background): Slide {
//     return { ...slide, background: newBackground };
// }

// const myPresentation: Presentation = {
//     id: 'PRESID',
//     title: 'TITLE',
//     slides: [],
//     currentSlideId: '0'
// }
// console.log(myPresentation)