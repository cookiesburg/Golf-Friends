import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCourses } from '../courses/actions';
import { postScore } from './actions';
import { Form } from '../utilities/Form';

class ScoreForm extends Component {
  state = {
    course: '',
    strokes: '',
    userId: this.props.user.id,
  }


  componentDidMount() {
    this.props.getCourses();
  }
  postScore = (e) => {
    e.preventDefault();
    const course = this.props.courses.filter(course => course.name === this.state.course);
    const courseId = course[0].id;
    const { strokes, userId } = this.state;
    this.props.postScore(courseId, strokes, userId)

  };
  selectCourse(){
    this.setState( {course: this.refs.courseSelector.value} );
  }
  enterStrokes(){
    this.setState({strokes: this.refs.strokesBox.value});
  }

  render() {
      const { courses } = this.props;
      return (
        <Form>
          <div className='header'>
            Scoring Form
          </div>
          <div className='body'>
            <select className='text' ref='courseSelector' onChange={(e) => { this.selectCourse(); } }>
              <option value="" disabled selected>select course</option>
              {courses.map(course => <option key={course.id}>{course.name}</option>)}
            </select>
            <input className='number' ref='strokesBox' placeholder='strokes' onChange={(e) => {this.enterStrokes(); } } />
          </div>
          <div className='buttons'>
            <button className='post' onClick={ (e) => {
              this.postScore(e);
              this.props.toggle(e);
            }}>POST SCORE</button>
          </div>
        </Form>
    );
  }
}

const mapStateToProps = state => ({
  courses: state.courses.courses,
  isLoaded: state.courses.coursesLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCourses, postScore
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ScoreForm);
