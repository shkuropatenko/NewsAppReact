import React from "react";
import { BrowserRouter as Router,  Switch } from "react-router-dom";
import MainHeader from "./MainHeader/MainHeader";
import Footer from "./Footer/Footer";
import Routes from "./Routes/Routes";


const App = () => {

  return (
    <>
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
    </>
  );
}

export default App;