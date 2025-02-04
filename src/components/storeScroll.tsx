import React, { useState, useRef, useEffect } from 'react';

export default function StoreScroll() {
    const [view, setView] = useState('full');
    const prev_view_scroll_ref = useRef(0);

    useEffect(() => {
        document.body.className = view === 'full' ? 'full-view' : 'grid-view';
    }, [view]);

    return (
        <button
            className="fixed top-4 right-4 p-2 bg-blue-500 text-white rounded"
            onClick={() => {
                prev_view_scroll_ref.current = window.scrollY;
                setView(view === 'full' ? 'grid' : 'full');
                window.scrollTo(0, prev_view_scroll_ref.current);
            }}
        >
            {view === 'full' ? 'Grid View' : 'Full View'}
        </button>
    );
}