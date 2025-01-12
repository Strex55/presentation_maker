import { useState, useRef, useEffect } from 'react';

function clamp(min: number, max: number, value: number): number {
  return Math.min(Math.max(value, min), max);
}

export function dragAndDrop(
  initialPosition: { x: number; y: number },
  containerSize: { width: number; height: number },
  scale: number,
  onPositionChange: (newPosition: { x: number; y: number }) => void
) {
  const [position, setPosition] = useState(initialPosition);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    offset.current = {
      x: e.clientX - position.x * scale,
      y: e.clientY - position.y * scale,
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const newX = clamp(0, containerSize.width, (e.clientX - offset.current.x) / scale);
    const newY = clamp(0, containerSize.height, (e.clientY - offset.current.y) / scale);
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    onPositionChange(position);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    setPosition(initialPosition);
  }, [initialPosition]);

  return {
    position,
    handleMouseDown,
  };
}
