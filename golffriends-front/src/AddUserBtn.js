import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Tile } from './UserTile';
import Toggle from './Toggle';
import Modal from './Modal';

class AddUserBtn extends Component {
  state = {
    name: '',
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  submitUser = (e) => {
    e.preventDefault();
    console.log(this.state.name);
    const user = { name:this.state.name }
    axios.post(`http://localhost:3001/api/v1/users`, {user})
    .then(response => {
      console.log(response);
    })
    .catch(error => console.log(error))
  }

  render() {
    return(
      <Tile>
        <Toggle>
          {({on, toggle}) => (
            <Fragment>
              <Modal on={on} toggle={toggle}>
                <UserForm>
                  <input type='text' placeholder='Name' onChange={this.update('name')} />
                  <button onClick={this.submitUser}>Create User</button>
                </UserForm>
              </Modal>
              <button onClick={toggle}>+</button>
            </Fragment>
          )}
        </Toggle>
      </Tile>
    );
  }
}

export default AddUserBtn;

const UserForm = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    line-height: 28px;
  }

  button {
    font-size: 18px;
    font-weight: bold;
    border-radius: 3px;
  }

`;
