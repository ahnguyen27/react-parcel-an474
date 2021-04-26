import React, { useEffect } from "react";

const { tableau } = window;

function TabViz2Embed() {
  const placeholder = document.getElementById("vizHolder2")

  const url = "https://public.tableau.com/views/MissingPersonsDemo/Dashboard2"

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


export default TabViz2Embed;
