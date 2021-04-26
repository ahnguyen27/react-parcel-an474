import React, { useEffect } from "react";

const { tableau } = window;

function TabViz3Embed() {
  const placeholder = document.getElementById("vizHolder3")

  const url = "https://public.tableau.com/views/MissingPersonsDemo/Dashboard3"

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


export default TabViz3Embed;
