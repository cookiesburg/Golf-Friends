import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Tile } from './UserTile';

class AddUserBtn extends Component {
  render() {
    return(
      <Tile>
        <button >+</button>
      </Tile>
    );
  }
}

export default AddUserBtn;
