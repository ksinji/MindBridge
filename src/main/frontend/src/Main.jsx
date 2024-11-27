// Main.jsx
import React from "react";
import { createRoot } from "react-dom/client";

// React Router 추가 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 기존 Sample 컴포넌트 외에 새 페이지 추가
import Sample from "./Sample";
import WeeklyAnalysis from "./WeeklyAnalysis"; 
import PointsHistory from "./PointsHistory";   
import Store from "./Store";                   
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        {/* React Router 추가 (수정된 부분) */}
        <Router>
            <Routes>
                {/* 기본 경로에 Sample 컴포넌트 렌더링 */}
                <Route path="/" element={<Sample />} />
                
                {/* 새 경로와 컴포넌트 추가 (수정된 부분) */}
                <Route path="/weekly-analysis" element={<WeeklyAnalysis />} />
                <Route path="/points-history" element={<PointsHistory />} />
                <Route path="/store" element={<Store />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
