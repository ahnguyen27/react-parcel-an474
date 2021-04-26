import React, { useEffect } from "react";

const { tableau } = window;

function TabViz5Embed() {
  const placeholder = document.getElementById("vizHolder5")

  const url = "https://public.tableau.com/views/MissingPersonsDemo/Dashboard5"

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


export default TabViz5Embed;
