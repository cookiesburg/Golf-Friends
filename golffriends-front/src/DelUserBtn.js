import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import Modal from './Modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteUser } from './users/actions';

class DelUserBtn extends Component {
  // deleteUser = () => {
  //   console.log(this.props.user);
  //
  //   axios.delete(`http://localhost:3001/api/v1/users/${this.props.user}`)
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(error => console.log(error))
  // }

  delUser = (e) => {
    e.preventDefault();
    const user = this.props.user;
    this.props.deleteUser(user);
  };

  render() {
    return(
      <DeleteButton>
        <i className="material-icons" onClick={this.delUser}>delete</i>
      </DeleteButton>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteUser,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(DelUserBtn);

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
