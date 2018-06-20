import React, { Component } from 'react';
import styled from 'styled-components';

export default class ScoreTile extends Component {

  render() {
    return(
      <TileWrapper>
        <ScoreDis>{this.props.strokes}</ScoreDis>
        <CourseDate>{this.props.created_at}<span>{this.props.course}</span></CourseDate>
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
  width: 128px;
`;
const ScoreDis = styled.div`
  flex-grow:3;
  font-size: 37px;
`;
const CourseDate = styled.div`
  flex-grow:1;
  font-size: 11px;
`;
