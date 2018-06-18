import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Tile } from './UserTile';
import Toggle from './Toggle';
import Modal from './Modal';

class DelUserBtn extends Component {
  deleteUser = () => {
    console.log(this.props.user);

    axios.delete(`http://localhost:3001/api/v1/users/${this.props.user}`)
    .then(response => {
      console.log(response);
    })
    .catch(error => console.log(error))
  }

  render() {
    return(
      <DeleteButton>
        <i className="material-icons" onClick={this.deleteUser}>delete</i>
      </DeleteButton>
    );
  }
}

export default DelUserBtn;

const DeleteButton = styled.button`
  background-color: #222;
  i {
    font-size: 20px;
    color: white;
    background-color: #222;

    :hover {
      color: red;
      cursor: pointer;
    }
  }
`;
