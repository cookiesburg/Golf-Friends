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

const Wrapper = styled.div`
  height:400px;
  width:100%;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  color:white;
  letter-spacing: 1px;
  background-color: #222;
  padding: 2px;
  font-family: karla;
`;
const FormWrapper = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height:100%;
align-items: center;

    select {
      max-height: 27px;
      margin-top: 30%;
      font-size:18px;
      text-align:center;
      width: 70%;

    }
    input {
      max-height: 35px;
      margin: 1rem;
      width: 20%;
      font-size:18px;
      text-align:center;
      flex-grow: 1;
      margin-bottom: 60px;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 3px solid black;

        :selected {
          border: none;
        }
    }
    button {
      width: 100%;
      flex-grow: 1;
      font-size: 25px;
      color:white;
      background: var(--base);
      letter-spacing: 3px;
      height:80px;

      :hover {
        cursor:pointer;
        box-shadow: 0 0 3rem black;
      }
    }

`;
