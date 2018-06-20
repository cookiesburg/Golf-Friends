import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import Modal from './Modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editUser } from './users/actions';

class EditUserBtn extends Component {
  state = {
    name: this.props.user.name || '',
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  editUser = (e) => {
    e.preventDefault();
    const id = this.props.user.id;
    const name = this.state.name;
    this.props.editUser(id, name);
  };

  render() {
    return(
      <EditButton>
        <Toggle>
          {({on, toggle}) => (
            <Fragment>
              <Modal on={on} toggle={toggle}>
                <UserForm>
                  <input type='text' placeholder={this.state.name} onChange={this.update('name')} />
                  <button onClick={ (e) => {
                    this.editUser(e);
                    toggle();
                  }}>Commit Changes</button>
                </UserForm>
              </Modal>
                <i className="material-icons" onClick={toggle}>edit</i>
            </Fragment>
          )}
        </Toggle>
      </EditButton>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  editUser,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(EditUserBtn);

const EditButton = styled.button`
  background-color: #222;
  border: none;
  i {
    font-size: 20px;
    color: white;
    background-color: #222;

    :hover {
      color: green;
      cursor: pointer;
    }
  }
`;
const UserForm = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
