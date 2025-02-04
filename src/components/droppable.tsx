import React from 'react';
import { useDroppable } from '@dnd-kit/core';

interface DroppableProps {
  children: React.ReactNode;
  id: string;
  spanTwoColumns?: boolean;
}

export default function Droppable({ children, id, spanTwoColumns = false }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
    gridColumn: spanTwoColumns ? 'span 2' : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="min-h-64 border-2 border-dashed border-blue-600"
    >
      {children}
    </div>
  );
}
