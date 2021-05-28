import styled from "styled-components";

export const Container = styled.div`
  .modal {
    background-color: rgba(143, 143, 143, 0.9);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
  }
  .modal:empty {
    display: none;
  }
  .modal > div {
    background-color: white;
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    margin: auto;
  }
  .modal .buttons button {
    display: inline-block;
    margin-right: 15px;
  }
`;


