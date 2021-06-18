import React, { useState } from "react";
import { BrowserRouter as Router,  Switch } from "react-router-dom";
import MainHeader from "./MainHeader/MainHeader";
import Footer from "./Footer/Footer";
import Routes from "./Routes/Routes";
import PostsContext from "../context";

const App = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [initPosts, setInitPosts] = useState([]);

  return (
    <div className="wrapper">
      <Router>
        <PostsContext.Provider
          value={{ initPosts, setInitPosts, filteredPosts, setFilteredPosts }}
        >
        <MainHeader />
          <main className="main">
              <div className="container">
                <Switch>
                  <Routes />
                </Switch>
              </div>
          </main>
        <Footer />
        </PostsContext.Provider>
      </Router>
    </div>
  );
}

export default App;