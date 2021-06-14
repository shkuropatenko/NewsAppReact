import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainHeader from "./MainHeader/MainHeader";
import NewsBox from "./NewsBox/NewsBox";

const App = () => {
  return (
    <>
      <MainHeader />
      <main>
        <div className="container">
          <div className="news-frame">
            <BrowserRouter>
              <Route path="/news" component={NewsBox} />
              <NewsBox />
              <NewsBox />
              <NewsBox />
              <NewsBox />
            </BrowserRouter>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;