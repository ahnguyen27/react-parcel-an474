import React, { useEffect } from "react";

const { tableau } = window;

function TabViz6Embed() {
  const placeholder = document.getElementById("vizHolder6")

  const url = "https://public.tableau.com/views/MissingPersonsDemo/Dashboard6"

  const options = {
    device: "desktop",
  };

  function initViz() {
    new tableau.Viz(placeholder, url, options);
  }

  useEffect(() => {
    initViz();
  },[])

  return (null);
}


export default TabViz6Embed;
