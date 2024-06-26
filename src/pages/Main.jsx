import { Link } from "react-router-dom";
import React from "react";

import img1 from "./thumbnails/img1.jpg";
import img2 from "./thumbnails/img2.jpg";
import img3 from "./thumbnails/img3.jpg";
import img4 from "./thumbnails/img4.png";
import "./Main.css";

function Main() {
  return (
    <div className="main-container">
      <h1>노인인지치료 퀴즈 (3팀)</h1>
      <div className="thumbnail-container">
        <Link to="/LeeQuiz/TimerPage" className="thumbnail-block">
          <img src={img1} alt="Lee" className="thumbnail-image" />
          <h2 className="thumbnail-title">이용빈의 퀴즈</h2>
        </Link>
        <Link to="/KimQuiz/Quiz" className="thumbnail-block">
          <img src={img2} alt="Kim" className="thumbnail-image" />
          <h2 className="thumbnail-title">김지민의 퀴즈</h2>
        </Link>
        <Link to="/ParkQuiz/Q11" className="thumbnail-block">
          <img src={img3} alt="Page 3" className="thumbnail-image" />
          <h2 className="thumbnail-title">박재현의 퀴즈</h2>
        </Link>
        <Link to="/SonQuiz/Thumbnail" className="thumbnail-block">
          <img src={img4} alt="Page 4" className="thumbnail-image" />
          <h2 className="thumbnail-title">손재원의 퀴즈</h2>
        </Link>
      </div>
    </div>
  );
}

export default Main;
