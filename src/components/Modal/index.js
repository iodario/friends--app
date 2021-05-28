import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom"; //createPortal crea el portal
import { Container } from "./styled";

const modalRoot = document.getElementById("modal"); //es la raiz del modal

                                                    
export default ({ children }) => {              //creamos el Modal de la misma manera que el Nav, al modal le pasamos como hijos cualquier cosa que le pongamos adentro, y de esa manera poder reutilizarla
  const elRef = useRef(null);                   //donde vamos a guardar la referencia al elemento del modal, el valor inicial es null , la llamamos elRef
  if (!elRef.current) {
    elRef.current = document.createElement("div"); //remite a index.html
  }

  useEffect(() => {                              // agarra la referencia que hice en el html y agrega el modal
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current); //removeChild borra el modal
  }, []);                                        //lo voy a correr una sola vez al principio []


  return createPortal(                            //recibe que es lo que yo quiero poner en el portal, y la referencia de donde
    
    <Container>
      <div className="modal">
        <div>{children}</div>
      </div>
    </Container>,
    elRef.current
  );
};
