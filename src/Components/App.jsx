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
        <PostsContext.Provider
          value={{ initPosts, setInitPosts, filteredPosts, setFilteredPosts }}
        >
      <MainHeader />
      <Router>
        <main className="main">
            <div className="container">
              <Switch>
                <Routes />
              </Switch>
            </div>
        </main>
      </Router>
      <Footer />
        </PostsContext.Provider>
    </div>
  );
}

export default App;