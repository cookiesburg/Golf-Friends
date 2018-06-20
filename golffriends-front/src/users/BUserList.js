import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import UserTile from '../UserTile';
import AddUserBtn from '../AddUserBtn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers } from './actions';
import { Link } from 'react-router-dom';

class UserList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users, isLoaded } = this.props;
    if (!isLoaded) return <h1>loading users...</h1>;
    return (
      <Fragment>
        <nav>
          <Link to='/'>USERS</Link>
          <Link to='/courses'>COURSES</Link>
        </nav>
        <UsersContainer>
          <AddUserBtn />
          {users.map(user => <UserTile key={user.id} user={user} />)}
        </UsersContainer>
    </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  isLoaded: state.users.usersLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getUsers,
}, dispatch);

// const mapDispatchToProps = dispatch => {
//   return {
//     getUsers: () => dispatch(getUsers())
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

const UsersContainer = styled.div`
  width: 62%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  margin-left:19%;
`;
