import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Toggle from '../Toggle';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteUser } from './actions';

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
    const id = this.props.user.id;
    console.log(id, 'in btn comp');
    this.props.deleteUser(id);
  };

  render() {
    return(

        <Toggle>
          {({on, toggle}) => (
            <Fragment>
              <Modal on={on} toggle={toggle}>
                <div>
                  <button onClick={ (e) => {
                    this.delUser(e);
                    toggle();
                  }}>Delete User</button>
                  <button onClick={toggle}>nevermind</button>
                </div>
              </Modal>
              <button className='delete' onClick={ (e) => toggle()}>
                DELETE USER
              </button>
            </Fragment>
          )}
        </Toggle>
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
