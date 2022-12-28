import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    <Router basename="/movie-app/">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
export default App;

//라우터란
// 만약 '/' url을 가기위해서는 Home.js를 연결하고,
//'/about'을 가기 위해서는 About.js를 연결한다.

//Route안에는 매우 주요한 props가 두 개 들어간다.
//하나는 렌더링할 스크린이 들어가고, 다른 하나는 뭘 할 것인지 정해준다.
