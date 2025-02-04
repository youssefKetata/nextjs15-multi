"use client";

import Draggable from "@/components/draggable";
import Droppable from "@/components/droppable";
import Sidebar from "@/components/side-bar";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";


export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(() => !isOpen);
  }


  const containers = ['A', 'B', 'C', 'D'];
  const [parent, setParent] = useState<string | null>(null);

  const draggableMarkup = <Draggable id="draggable">Drag me</Draggable>;
  function handleDragEnd(event: DragEndEvent) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? String(over.id) : null);
  }
  return (
    <DndContext onDragEnd={handleDragEnd} id="dnd-context">
      <Sidebar isRTL={true} isOpen={isOpen} setIsOpen={setIsOpen} draggableMarkup={draggableMarkup} parent={parent} />
      <div className="flex-1 p-4">
        <button
          onClick={toggleSidebar}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isOpen ? "Close" : "Open"} Sidebar
        </button>
        <div className="mt-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          {containers.map((id) => (
            // We updated the Droppable component so it would accept an `id`
            // prop and pass it to `useDroppable`
            <Droppable key={id} id={id}>
              {parent === id ? draggableMarkup : 'Drop here'}
            </Droppable>
          ))}
        </div>
      </div>
    </DndContext>
  );
}
