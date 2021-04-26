import React, { useEffect } from "react";

const { tableau } = window;

function TabViz8Embed() {
  const placeholder = document.getElementById("vizHolder8")

  const url = "https://public.tableau.com/views/MissingPersonsDemo/Dashboard8"

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


export default TabViz8Embed;
