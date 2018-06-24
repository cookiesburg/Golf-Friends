import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

export default class ScoreTile extends Component {

  render() {
    return(
      <TileWrapper>
        <ScoreDis>88</ScoreDis>
        <CourseDate>Timberlin White <span>5/11</span></CourseDate>
      </TileWrapper>
    );
  }
}

const TileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2px;
  border: 1px solid green;
  flex-grow: 1;
`;
const ScoreDis = styled.div`
  flex-grow:3;
  font-size: 37px;
`;
const CourseDate = styled.div`
  flex-grow:1;
  font-size: 11px;
`;
