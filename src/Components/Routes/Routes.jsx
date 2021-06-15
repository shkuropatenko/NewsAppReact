import NewsBox from "../NewsBox/NewsBox";
import Post from "../Post/Post";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Routes = ({posts}) => {
  return (
    <>
      <Route exact path="/">
        <NewsBox />
      </Route>
      <Route path="/singlePost">
        <Post />
      </Route>
    </>
  )
}

export default Routes;