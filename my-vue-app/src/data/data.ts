//типы

export type DetailedSlide = {
    id: string;
    elements: SlideElement[];
    background: Background;
};

export type Presentation = {
    id: string;
    title: string;
    slides: DetailedSlide[];
    currentSlideId: string | null;
};

type SlideElement = TextElement | ImageElement;

type TextElement = {
    type: 'text';
    id: string;
    content: string;
    fontSize: number;
    fontFamily: string;
    position: Position;
};

type ImageElement = {
    type: 'image';
    id: string;
    src: string;
    size: Size;
    position: Position;
};

type Position = {
    x: number;
    y: number;
};

type Size = {
    width: number;
    height: number;
};

type Background =
    | { type: 'color'; color: string }
    | { type: 'image'; src: string }
    | { type: 'gradient'; colors: string[] };



type Slide = {
    id: string;
    elements: SlideElement[];
    background: Background;
};

// type BasicSlide = {
//     id: string;
//     title: string;
// };

// type SlideArr = Slide[];

//функции

export function addSlide(presentation: Presentation, newSlide: DetailedSlide): Presentation {
    return { ...presentation, slides: [...presentation.slides, newSlide] };
}

export function removeSlide(presentation: Presentation, slideId: string): Presentation {
    const updatedSlides = presentation.slides.filter(slide => slide.id !== slideId);
    return { ...presentation, slides: updatedSlides };
}

export function moveSlide(presentation: Presentation, fromIndex: number, toIndex: number): Presentation {
    const slides = [...presentation.slides];
    const [movedSlide] = slides.splice(fromIndex, 1);
    slides.splice(toIndex, 0, movedSlide);
    return { ...presentation, slides };
}
export function changePresentationTitle(presentation: Presentation, newTitle: string): Presentation {
    return { ...presentation, title: newTitle };
}


function addElement(slide: Slide, newElement: SlideElement): Slide {
    return { ...slide, elements: [...slide.elements, newElement] };
}

function removeElement(slide: Slide, elementId: string): Slide {
    const updatedElements = slide.elements.filter(element => element.id !== elementId);
    return { ...slide, elements: updatedElements };
}

function moveElement(slide: Slide, elementId: string, newPosition: Position): Slide {
    const updatedElements = slide.elements.map(element =>
        element.id === elementId
            ? { ...element, position: newPosition }
            : element
    );
    return { ...slide, elements: updatedElements };
}

function resizeElement(slide: Slide, elementId: string, newSize: Size): Slide {
    const updatedElements = slide.elements.map(element =>
        element.type === 'image' && element.id === elementId
            ? { ...element, size: newSize }
            : element
    );
    return { ...slide, elements: updatedElements };
}

function changeText(slide: Slide, textElementId: string, newText: string): Slide {
    const updatedElements = slide.elements.map(element =>
        element.type === 'text' && element.id === textElementId
            ? { ...element, content: newText }
            : element
    );
    return { ...slide, elements: updatedElements };
}

function changeFontSize(slide: Slide, textElementId: string, newSize: number): Slide {
    const updatedElements = slide.elements.map(element =>
        element.type === 'text' && element.id === textElementId
            ? { ...element, fontSize: newSize }
            : element
    );
    return { ...slide, elements: updatedElements };
}

function changeFontFamily(slide: Slide, textElementId: string, newFontFamily: string): Slide {
    const updatedElements = slide.elements.map(element =>
        element.type === 'text' && element.id === textElementId
            ? { ...element, fontFamily: newFontFamily }
            : element
    );
    return { ...slide, elements: updatedElements };
}

function changeSlideBackground(slide: Slide, newBackground: Background): Slide {
    return { ...slide, background: newBackground };
}

const myPresentation: Presentation = {
    id: 'PRESID',
    title: 'TITLE',
    slides: [],
    currentSlideId: '0'
}
console.log(myPresentation)