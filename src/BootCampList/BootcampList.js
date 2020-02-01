import React from "react";
import BOOTCAMPS from "../bootcamps";
import "./BootcampList.css";

function BootcampList() {
  return (
    <>
      <p>Choose a bootcamps from the list below</p>
      {/*
      //Inside the <ul> we're mapping over each of the poems
      // To create li instances 
    */}
      <ul className="BootcampList">
        {BOOTCAMPS.map(bootcamp => (
          <li key={bootcamp.id}>
            <a href={`/bootcamp/${bootcamp.id}`}>{bootcamp.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BootcampList;
