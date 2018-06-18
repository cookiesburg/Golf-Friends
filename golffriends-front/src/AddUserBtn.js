import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Tile } from './UserTile';
import Toggle from './Toggle';
import Modal from './Modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from './users/actions';

class AddUserBtn extends Component {
  state = {
    name: '',
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // submitUser = (e) => {
  //   e.preventDefault();
  //   console.log(this.state.name);
  //   const user = { name:this.state.name }
  //   axios.post(`http://localhost:3001/api/v1/users`, {user})
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(error => console.log(error))
  // }
  submitUser = (e) => {
    e.preventDefault();
    const user = this.state.name;
    this.props.addUser(user);
  };

  render() {
    return(
      <Tile>
        <Toggle>
          {({on, toggle}) => (
            <Fragment>
              <Modal on={on} toggle={toggle}>
                <UserForm>
                  <input type='text' placeholder='Name' onChange={this.update('name')} />
                  <button onClick={ (e) => {
                    this.submitUser(e);
                    toggle();
                  }}>Create User</button>
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

const mapStateToProps = state => ({
  users: state.users.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddUserBtn);

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
