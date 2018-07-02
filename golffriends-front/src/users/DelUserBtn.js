import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Toggle from '../Toggle';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteUser } from './actions';
import { Form } from '../utilities/Form';

class DelUserBtn extends Component {

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
                <Form>
                    <div className='header'>
                      Delete User
                    </div>
                    <div className='body'>
                      <p>Are You Sure?</p>
                    </div>
                    <div className='buttons'>
                      <button className='delete' onClick={ (e) => {
                        this.delUser(e);
                        toggle(e);
                      }}>Delete User</button>
                      <button className='save' onClick={toggle}>nevermind</button>
                    </div>
                </Form>
              </Modal>
              <button className='delete' onClick={ toggle }>
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
