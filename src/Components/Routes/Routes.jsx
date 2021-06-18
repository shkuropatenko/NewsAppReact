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
      <Route path="/post/:id*" component={Post} />
    </>
  )
}

export default Routes;