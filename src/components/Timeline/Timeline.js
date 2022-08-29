import React from "react";
import { Chrono } from "react-chrono";
import {data} from "./data";
import {upcoming} from './data'
import './Timeline.css'

export default function Timeline() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Appilication Status</h1>
      <div style={{ width: "1250px", height: "500px" }}>
        <Chrono items={data} mode="HORIZONTAL" showAllCardsHorizontal />
      </div>
      <h1>Upcoming Events <span className='condition'>(If your selected)</span></h1>
      <div style={{ width: "1250px", height: "500px" }}>
        <Chrono items={upcoming} mode="HORIZONTAL" showAllCardsHorizontal />
      </div>
    </div>
  );
}
