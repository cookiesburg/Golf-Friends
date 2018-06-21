import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Toggle from '../Toggle';
import Modal from '../Modal';
import { Form } from '../utilities/Form';

class CourseTile extends Component {
  render() {
    return(
        <CourseWrapper>
            <div className='name'>{this.props.name}</div>
            <div className='rating'>{this.props.rating}</div>
            <div className='slope'>{this.props.slope}</div>
            <Toggle>
              {({on, toggle}) => (
                <Fragment>
                  <Modal on={on} toggle={toggle}>
                    <Form className='formWrap'>
                      <div className='header'>
                        Edit Course
                      </div>
                      <div className='body'>
                        <input type='text' placeholder={this.props.name}  />
                        <input className='number' type='text' placeholder={this.props.rating}  />
                        <input className='number' type='text' placeholder={this.props.slope}  />
                      </div>
                      <div className='buttons'>
                        <button className='save'>SAVE CHANGES</button>
                        <button className='delete'>DELETE COURSE</button>
                      </div>
                    </Form>
                  </Modal>
                  <i onClick={toggle} className="material-icons edit">edit</i>
                </Fragment>
              )}
            </Toggle>
        </CourseWrapper>
    );
  }
}

export default CourseTile;

const CourseWrapper = styled.div`
margin-bottom: 10px;
width: 500px;
padding: 20px;
font-family: karla;
background-color: var(--base);
color: white;
display: flex;

:hover {
  box-shadow: 0 0 1rem gray;
}
  .name {
    flex-grow: 4
  }
  .rating, .slope, .edit {
    flex-grow: 1
  }
`;
