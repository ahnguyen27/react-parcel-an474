import React from "react";
/* import { csv } from "d3-fetch"; */
/* global d3*/
import TabViz1Embed from './components/TableauViz1Embed'

const viewHeight = 500;
const viewWidth = 500;


const App = () => {
    return (
      <div>
        <h1>Missing Persons in WA</h1>
        <h2>Exploratory Data Analysis: Assignment 2</h2>
        <TabViz1Embed />
      </div>
    ); // outer brace = js / inner brace = object
};

export default App;
