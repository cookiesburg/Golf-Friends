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
  width: 100%;
  justify-content: space-around;
  margin: 1px;
  height: 33%;
  background-color: #222;
`;
const ScoreDis = styled.div`
  font-size: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const CourseDate = styled.div`
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: orange;
`;
