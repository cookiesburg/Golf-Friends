
import styled from 'styled-components';

export { Form };

const Form = styled.div`
  display:flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  font-family: karla;
  border-radius: 8px;

  ${'' /* just fro round history component */}
  .history {
    display: flex;
  }

  .header {
    height: 100px
    background: #222;
    font-size: 24px;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px 6px 0 0;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  .body {
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-top: 50px;
      input, select, p {
        height:30px;
        font-size: 24px;
        text-align: center;
      }
      .text {
        width: 75%;
      }
      .number {
        width:25%;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 3px solid black;
      }
  }
  .buttons {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
      button {
        border-radius: 10px;
        width:80%;
        height: 45%;
        color: white;
        font-size:18px;
        font-weight: bold;
        text-transform: uppercase;
        :hover {
          box-shadow: 0 0 1rem gray;
        }
      }
      .delete {
        background-color:  red;
      }
      .save, .post {
        background: var(--base);
      }

  }
`;
