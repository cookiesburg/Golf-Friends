import React, { Component } from 'react';
import styled from 'styled-components';

export default class ScoreTile extends Component {

  render() {
    const courseName = this.props.score;
    console.log(courseName);
    return(
      <TileWrapper>
        <ScoreDis>{this.props.score.strokes}</ScoreDis>
        <CourseDate><span></span></CourseDate>
      </TileWrapper>
    );
  }
}

const TileWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2px;
  border: 1px solid green;
  width: 100px;
`;
const ScoreDis = styled.div`
  flex-grow:3;
  font-size: 37px;
`;
const CourseDate = styled.div`
  flex-grow:1;
  font-size: 11px;
`;
