import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Todo } from './Todo';
import React from 'react';

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error("Failed to find the root element");
}
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Todo />
    </StrictMode>
);
