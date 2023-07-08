import React, { useState } from "react";
import AppList from "../../components/Apps/List";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function Home() {
  useDocumentTitle("Home")
  
  return (
    <AppList />
  )
}

export default Home;
