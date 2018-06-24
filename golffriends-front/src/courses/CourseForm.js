import React, { Component, Fragment } from 'react';
import Toggle from '../Toggle';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editCourse } from './actions';
import { Form } from '../utilities/Form';

class CourseForm extends Component {
  state = {
    name: this.props.course.name || '',
    rating: this.props.course.rating,
    slope: this.props.course.slope,
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  editCourse = (e) => {
    e.preventDefault();
    const id = this.props.course.id;
    const course = this.state;
    this.props.editCourse(id, course);
  };

  render() {
    const { course } = this.props;
    return(
      <Form>
        <div className='header'>
          Edit Course
        </div>
        <div className='body'>
          <input className='text' type='text' placeholder={course.name} onChange={this.update('name')} />
          <input className='number' type='text' placeholder={course.rating} onChange={this.update('rating')} />
          <input className='number' type='text' placeholder={course.slope} onChange={this.update('slope')} />
        </div>
        <div className='buttons'>
          <button className='save' onClick={ (e) => {
            this.editCourse(e);
            this.props.toggle(e);
          }}>SAVE CHANGES</button>
        </div>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  courses: state.courses.courses,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  editCourse,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(CourseForm);
