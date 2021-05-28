import React from "react";
import ReactHtmlParser from "react-html-parser";
import { EpisodeEl } from "./styled";

export default ({ id, medium, name, summary, onClick }) => {   //recibo onClick como una propiedad mas
  return (
    //llamamos al div como EpisodeEl
    <EpisodeEl key={id} onClick={onClick}>
      <img alt="20" src={medium} />
      <h3>{name}</h3>
      {ReactHtmlParser(summary)}
    </EpisodeEl>
  );
};
