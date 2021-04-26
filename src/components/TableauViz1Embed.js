import React, { useRef, useEffect } from "react";

const { tableau } = window;

function TabViz1Embed() {
  /* const ref = useRef(null); */
  const placeholder = document.getElementById("vizHolder1")

  const url = "https://public.tableau.com/views/MissingPersonsDemo/Dashboard1"

  const options = {
    device: "desktop",
  };

  function initViz() {
    /* new tableau.Viz(ref.current, url, options); */
    new tableau.Viz(placeholder, url, options);
  }

  useEffect(() => {
    initViz();
  },[])

  return (null);
}


export default TabViz1Embed;
