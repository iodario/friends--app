import React, { useEffect, useState } from "react";
import "./App.css";
import { getAllEpisodes } from "./services";
import {
    //entre llaves es componente nombrado
    Contador,
    Loader,
    EpisodesList,
    NavBar,
    SearchBox,
    Modal,
    EpisodioDetalle,
   } from "./components";

function App() {
    const [episodios, setEpisodios] = useState([]); //lo que se ve en la pantalla
    const [episodiosAll, setEpisodiosAll] = useState([]); //episodios originales
    const [isModalVisible, setIsModalVisible] = useState(false); //booleano, por defecto es false
    const [episodioSeleccionado, setEpisodioSeleccionado] = useState({});

    //si yo filtro los episodios me quedo sin el total, original. tengo que mantener el valor original, para que pueda volver al estado 0.

    useEffect(() => {
        (() => {
          setTimeout(async () => {
            const data = await getAllEpisodes();
            setEpisodios(data);
            setEpisodiosAll(data);
          }, 1000);
        })();
    }, []);

    const handleChange = (event) => {  //en esta funcion vamos a filtrar los episodios, filtramos los resultados de busqueda
        
        const value = event.target.value.toLowerCase();

        if (value.trim() === "") {
          setEpisodios(episodiosAll);
          return;
        }

        const filtered = episodiosAll.filter(({ name }) => {  //este valor yo no lo quiero mutar, yo lo quiero mantener igual. el que es mutable es episodios. con filter maneja cada elemento.
            return name.toLowerCase().includes(value); //yo quiero que filtre cuando este {name} incluya un (value)
        });
        setEpisodios(filtered); //asignamos el valor que yo quiera a episodios, va a cambiar el estado, y todo se va a volver a renderizar
    };

    const toggleModal = () => {      //toggleModal cambia el estado de la visibilidad del Modal
      setIsModalVisible(!isModalVisible); //lo que sea que tiene, es lo opuesto
    };

    const handleItemClick = (episodio) => {  //esta funcion abre el modal, y pone el episodio que yo quiero mostrar, toggle cambia a lo opuesto
      setEpisodioSeleccionado(episodio);
      console.log(episodio);
      toggleModal();                 // cambia el estado de la visibilidad del modal
    };

    return (                        //el SearchBox me va a estar afectando la cantidad
      <>
        <div style={{ fontSize: 30 }}>
            <NavBar>
              <SearchBox onChange={handleChange} />
              <Contador cantidad={episodios.length} />
            </NavBar>

            <div style={{ marginTop: 100 }}>
              {(episodios.length === 0) ? (
                <Loader />
              ) : (               //EpisodesList lo que recibe es {episodios}. Es un estado, al que el componente esta escuchando,
                                  //Cada vez que episodios cambie, EpisodesList va a reaccionar y se va a volver a renderizar.
                 <>
                  <EpisodesList
                    episodios={episodios}
                    onItemClick={handleItemClick}
                  />
                </>
                  )}
            </div>
        </div>

          {(isModalVisible) ? (     //abrimos llaves para dar una instruccion de javascript, spread desparrama todas las propiedades
            <Modal>
              <EpisodioDetalle {...episodioSeleccionado} />   
              <p>Episode title</p>
              <button onClick={toggleModal}>Cerrar</button>
            </Modal>
           ) : null}
      </>
    );
}
export default App;
