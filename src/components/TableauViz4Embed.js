import React, { useEffect } from "react";

const { tableau } = window;

function TabViz4Embed() {
  const placeholder = document.getElementById("vizHolder4")

  const url = "https://public.tableau.com/views/MissingPersonsDemo/Dashboard4"

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


export default TabViz4Embed;
