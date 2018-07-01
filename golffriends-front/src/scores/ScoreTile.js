import React, { Component } from 'react';
import styled from 'styled-components';

export default class ScoreTile extends Component {

  render() {
    return(
      <TileWrapper>
        <ScoreDis>{this.props.strokes}</ScoreDis>
        <Course>{this.props.course}</Course>
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
  height: 24%;
  border: 1px solid black;
  font-weight: normal;
  border-radius: 8px;
`;
const ScoreDis = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const Course = styled.div`
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
`;
