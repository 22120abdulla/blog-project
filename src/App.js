import { Routes, Route } from "react-router-dom";

import "./App.css";
import  ArticleDetailpage from "./pages/articleDetail/ArticleDetailpage";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<ArticleDetailpage />} /> 
      </Routes>
    </div>
  );
}

export default App;
