import React from "react";
import { createRoot } from "react-dom/client";
import Sample from './Sample.jsx';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Sample />
    </React.StrictMode>
);