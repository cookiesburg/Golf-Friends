import React, { Component } from 'react';
import styled from 'styled-components';
import ScoreTile from './ScoreTile';

export default class RoundHistory extends Component {

  render() {
    return(
      <HistoryBody>
        <HcpSect>
          <NumDisplay>
            <p>HANDICAP INDEX</p>
            <HdpDis>7.8</HdpDis>
          </NumDisplay>
          <GraphDisplay>
            <p>this is a graph</p>
          </GraphDisplay>
        </HcpSect>
        <HistSect>
          
          <ScoreTile />
          <ScoreTile />
          <ScoreTile />
          <ScoreTile />
        </HistSect>

      </HistoryBody>
    );
  }
}
const HistoryBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 540px;
    height:100%;
    border: 1px solid black;
    flex-grow:1;
`;
const HcpSect = styled.div`
  flex-grow: 2;
  border: 1px solid red;
  display: flex;
`;
const HistSect = styled.div`
  flex-grow: 1;
  border: 1px solid blue;
  display:flex;
`;
//grid would be better for this section

const NumDisplay = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 11px;
`;
const HdpDis = styled.div`
  font-size: 55px;
`;
const GraphDisplay = styled.div`
  flex-grow: 3;
  border: 1px solid orange;
`;
