import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCourses } from '../courses/actions';
import { postScore } from './actions';

class ScoreForm extends Component {
  state = {
    course: '',
    strokes: '',
    userId: this.props.user.id,
  }

  postScore = (e) => {
    e.preventDefault();
    const course = this.props.courses.filter(course => course.name === this.state.course);
    const courseId = course[0].id;
    const { strokes, userId } = this.state;
    this.props.postScore(courseId, strokes, userId)

  };

  // handleSubmit = () => {
  //   const score = { strokes:this.state.strokes, user_id: this.props.user.id, course_id: this.state.course}
  //   axios.post(
  //     `http://localhost:3001/api/v1/scores`, {score: score})
  //   .then(response => {
  //     console.log(response);
  //     this.props.updateScores(this.props.selectPlayer)
  //   })
  //   .catch(error => console.log(error))
  // }

  componentDidMount() {
    this.props.getCourses();
  }



  selectCourse(){
    this.setState( {course: this.refs.courseSelector.value} );
  }

  enterStrokes(){
    this.setState({strokes: this.refs.strokesBox.value});
  }

  render() {
      const { courses } = this.props;
      return (
        <FormWrapper>
          <select ref='courseSelector' onChange={(e) => { this.selectCourse(); } }>
          <option value="" disabled selected>select course</option>
          {courses.map(course => <option key={course.id}>{course.name}</option>)}
          </select>
          <input ref='strokesBox' placeholder='strokes' onChange={(e) => {this.enterStrokes(); } } />
          <button onClick={ (e) => {
            this.postScore(e);
            this.props.toggle(e);
          }}>POST SCORE</button>
        </FormWrapper>
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

const FormWrapper = styled.div`
display: flex;
flex-direction: column;
width: 540px;
height:100%;
border: 1px solid black;
flex-grow:1;
align-items: center;

    select {
      height: 3rem;
      min-height: 20px;
      margin: 1rem;
      font-size:1.3rem;
      text-align:center;
      width: 50%;
      flex-grow: 2;
    }
    input {
      height: 3rem;
      min-height: 20px;
      margin: 1rem;
      width: 15%;
      align-self:center;
      font-size:1.5rem;
      text-align:center;
      flex-grow: 2;
    }
    button {
      width: 100%;
      flex-grow: 1;
    }

`;
