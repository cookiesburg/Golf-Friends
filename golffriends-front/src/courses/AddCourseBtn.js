import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Toggle from '../Toggle';
import Modal from '../Modal';
import { Form } from '../utilities/Form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCourse} from './actions';

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
      <CourseWrapper>
        <Toggle>
          {({on, toggle}) => (
            <Fragment>
              <Modal on={on} toggle={toggle}>
                <Form>
                  <div className='header'>
                    Course Form
                  </div>
                  <div className='body'>
                    <input type='text' placeholder='Course Name + (TEES)' onChange={this.update('name')} />
                    <input className='number' type='text' placeholder='rating' onChange={this.update('rating')} />
                    <input className='number' type='text' placeholder='slope' onChange={this.update('slope')} />
                  </div>
                  <div className='buttons'>
                    <button className='post' onClick={ (e) => {
                      this.submitCourse(e);
                      toggle();
                    }}>ADD COURSE</button>
                  </div>
              </Form>
              </Modal>
              <i onClick={toggle} className="material-icons add">add_box</i>
            </Fragment>
          )}
        </Toggle>
      </CourseWrapper>
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

const CourseWrapper = styled.div`
margin-bottom: 10px;
width: 500px;
padding: 20px;
font-family: karla;
background-color: var(--base);
color: white;
display: flex;
justify-content: center;
border-radius: 8px;

:hover {
  box-shadow: 0 0 1rem gray;
}
i {
  cursor: pointer;
}

`;
