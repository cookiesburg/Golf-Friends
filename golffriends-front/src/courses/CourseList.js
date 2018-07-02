import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCourses } from './actions';
import AddCourseBtn from './AddCourseBtn';
import CourseTile from './CourseTile';

class CourseList extends Component {
  componentDidMount() {
    this.props.getCourses();
  }
  render() {
    const { courses, isLoaded } = this.props;
    if (!isLoaded) return <h1>loading courses...</h1>;
    return (
      <Fragment>
        <CourseWrapper>
          <AddCourseBtn />
          {courses.map(course => <CourseTile key={course.id}course={course}/>)}
        </CourseWrapper>
        <nav className='userLink'>
          <Link to='/'> USER LIST </Link>
        </nav>
    </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  courses: state.courses.courses,
  isLoaded: state.courses.coursesLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCourses,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(CourseList);

const CourseWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 30px;
`;
