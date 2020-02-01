import React from "react";
import { Link } from "react-router-dom";
import BOOTCAMPS from "../bootcamps";
import "./BootcampPage.css";

export default function BootCampPage(props) {
  const bootcamp = BOOTCAMPS.find(b => b.id === props.match.params.bootcampId);
  return (
    <article className="BootcampPage">
      <>
        <h2>{bootcamp.title}</h2>
        <div className="BootcampPage__about">
          {bootcamp.content.map((b, i) =>
            b === "" ? <br key={i} /> : <p key={i}>{b}</p>
          )}
        </div>
        <div className="BootcampPage__programs">
          <h2>Programs</h2>
          {bootcamp.programs.map((b, i) =>
            b === "" ? <br key={i} /> : <p key={i}>{b}</p>
          )}
        </div>
        <div className="bootcampPage__url">
          <h2>Go to the website:</h2>
          <Link to={bootcamp.url}>{bootcamp.url}</Link>
        </div>
      </>
    </article>
  );
}
