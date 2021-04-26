import React from "react";
/* import { csv } from "d3-fetch"; */
/* global d3*/
import TabViz1Embed from './components/TableauViz1Embed'
import TabViz2Embed from './components/TableauViz2Embed'
import TabViz3Embed from './components/TableauViz3Embed'
import TabViz4Embed from './components/TableauViz4Embed'
import TabViz5Embed from './components/TableauViz5Embed'
import TabViz6Embed from './components/TableauViz6Embed'
import TabViz7Embed from './components/TableauViz7Embed'
import TabViz8Embed from './components/TableauViz8Embed'
/* import WriteUp from './components/WriteUp' */

const viewHeight = 500;
const viewWidth = 500;


const App = () => {
    return (
      <div>
        <h2>Brief Introduction & Write Up</h2>
        {/* <WriteUp />*/}
        <TabViz1Embed />
        <TabViz2Embed />
        <TabViz3Embed />
        <TabViz4Embed />
        <TabViz5Embed />
        <TabViz6Embed />
        <TabViz7Embed />
        <TabViz8Embed />
      </div>
    ); // outer brace = js / inner brace = object
};

export default App;
