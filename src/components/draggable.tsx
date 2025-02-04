import React from 'react';
import { useDraggable } from '@dnd-kit/core';
interface DraggableProps {
  children: React.ReactNode;
  id: string;
}
export default function Draggable(props: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="min-h-4 border-2  border-blue-600 p-2 m-2 relative z-40"
    >
      {props.children}
    </button>
  );
}
