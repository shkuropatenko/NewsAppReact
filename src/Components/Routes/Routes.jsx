import NewsBox from "../NewsBox/NewsBox";
import Post from "../Post/Post";
import React from "react";
import { Route } from "react-router-dom";
const Routes = () => {
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