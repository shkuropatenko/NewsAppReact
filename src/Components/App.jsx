import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainHeader from "./MainHeader/MainHeader";
import Routes from "./Routes/Routes";
import { api } from "../Services/api/postApi";


const App = () => {

  return (
    <>
      <MainHeader />
      <Router>
        <main>
            <div className="container">
              <Switch>
                <Routes />
              </Switch>
            </div>
        </main>
      </Router>
    </>
  );
}

export default App;