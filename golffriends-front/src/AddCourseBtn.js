import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import Modal from './Modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCourse} from './courses/actions';

class AddCourseBtn extends Component {
  state = {
    name: '',
    rating: '',
    slope: '',
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  submitCourse = (e) => {
    e.preventDefault();
    const name = this.state.name;
    const rating = this.state.rating;
    const slope = this.state.slope;
    this.props.addCourse(name, rating, slope);
  };

  render() {
    return(
      <ButtonTile>
        <Toggle>
          {({on, toggle}) => (
            <Fragment>
              <Modal on={on} toggle={toggle}>
                <UserForm>
                  <input type='text' placeholder='COURSE NAME' onChange={this.update('name')} />
                  <input type='text' placeholder='RATING' onChange={this.update('rating')} />
                  <input type='text' placeholder='SLOPE' onChange={this.update('slope')} />
                  <button onClick={ (e) => {
                    this.submitCourse(e);
                    toggle();
                  }}>ADD COURSE</button>
                </UserForm>
              </Modal>
              <button onClick={toggle}>+</button>
            </Fragment>
          )}
        </Toggle>
      </ButtonTile>
    );
  }
}

const mapStateToProps = state => ({
  courses: state.courses.courses,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addCourse,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddCourseBtn);

const ButtonTile = styled.div`
  margin-bottom: 10px;
  width: 500px;
  padding: 20px;
  display: flex;
  font-family: karla;
  background-color: var(--base);
  color: white;
  border-radius: 10px;
  :hover {
    box-shadow: 0 0 1rem gray;
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
