"use client";

export default function Widget({ id, title }:{id: string; title: string}) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md cursor-move" key={id}>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">Drag me!</p>
      </div>
    );
  }