import React from "react";
import Episodio from "../Episodio";
import { Container } from "./styled";

export default ({ episodios, onItemClick }) => {
  return (
    <Container>
      {episodios.map((episodio) => {
        const { id, name, image, summary } = episodio;
        const { medium } = image;
        
        return (
          <Episodio
            id={id}
            name={name}
            image={image}
            summary={summary}
            medium={medium}
            onClick={() => {
              onItemClick(episodio);
            }}
          />
        );
      })}
    </Container>
  );
};
