import React, { useEffect } from "react";

const { tableau } = window;

function TabViz7Embed() {
  const placeholder = document.getElementById("vizHolder7")

  const url = "https://public.tableau.com/views/MissingPersonsDemo/Dashboard7"

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


export default TabViz7Embed;
