import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default class ScoreForm extends Component {
  state = {
    courses: [],
    course:'',
    strokes:null
  }


  async componentDidMount() {
    try {
      const results = await fetch('http://localhost:3001/api/v1/courses');
      const courses = await results.json();
      this.setState({
        courses,
      })
    }
    catch(e) {
      console.log(e);
    }
  }

  handleSubmit = () => {
    const score = { strokes:this.state.strokes, user_id: this.props.user.id, course_id: this.state.course}
    axios.post(
      `http://localhost:3001/api/v1/scores`, {score: score})
    .then(response => {
      console.log(response);
      this.props.updateScores(this.props.selectPlayer)
    })
    .catch(error => console.log(error))
  }

  selectCourse(){
    this.setState( {course: this.refs.courseSelector.value} );
  }

  enterStrokes(){
    this.setState({strokes: this.refs.strokesBox.value});
  }

  render() {
      var courseOptions = (this.state.courses.map((course) => {
        return <option key={course.id} value={course.id}>{course.name}</option> ;
      }));
      return (
        <FormWrapper>
          <select ref='courseSelector' onChange={(e) => { this.selectCourse(); } }>
          <option value="" disabled selected>select course</option>
          {courseOptions}
          </select>
          <input ref='strokesBox' placeholder='strokes' onChange={(e) => {this.enterStrokes(); } } />
          <button className='submitButton' onClick={this.handleSubmit}>SUBMIT</button>
        </FormWrapper>
    );
  }
}

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
