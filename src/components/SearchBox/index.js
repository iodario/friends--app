import React from "react";
import { Container } from "./styled";

//props.onChange, al ser una propiedad es un props
//todo lo que yo le mande es una propiedad, un objeto
export default ({ onChange }) => (
  <Container>
    <input type="text" placeholder="Buscar" onChange={onChange} />
  </Container>
);
