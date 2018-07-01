import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Toggle from '../Toggle';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from './actions';
import { Form } from '../utilities/Form';

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
                <Form>
                  <div className='header'>
                    New User Form
                  </div>
                  <div className='body'>
                    <input type='text' placeholder='Name' onChange={this.update('name')} />
                  </div>
                  <div className='buttons'>
                    <button className='save' onClick={ (e) => {
                      this.submitUser(e);
                      toggle();
                    }}>CREATE USER</button>
                  </div>
                </Form>
              </Modal>
              <i onClick={toggle} className="material-icons add">add_box</i>
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

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 220px;
  background: gray;
  cursor: default;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: white;
  margin-top: 30px;
  margin-bottom: 30px;
  transition: all .4s ease;
  border-radius: 8px;
    :hover {
      box-shadow: 0 0 1rem var(--base);
    }
    i {
      cursor: pointer;
      background: gray;
      color: white;
    }

`;

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
