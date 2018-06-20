import React, { Component } from 'react';
import styled from 'styled-components';
import ScoreTile from './ScoreTile';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getScores } from './scores/actions';

class RoundHistory extends Component {
  componentDidMount() {
    const user = this.props.user;
    console.log(user);
    this.props.getScores(user);
  }

  render() {
    const { scores, isLoaded, handicap } = this.props;
    if (!isLoaded) return <h1>loading scores...</h1>;
    return(
      <HistoryBody>
        <HcpSect>
          <NumDisplay>
            <p>HANDICAP INDEX</p>
            <HdpDis>{handicap}</HdpDis>
          </NumDisplay>
          <GraphDisplay>
            <p>this is a graph</p>
          </GraphDisplay>
        </HcpSect>
        <HistSect>
          {scores.map(score => <ScoreTile  key={score.created_at} course={score.course.name} strokes={score.strokes} />)}
        </HistSect>

      </HistoryBody>
    );
  }
}

const mapStateToProps = state => ({
  scores: state.scores.scores,
  isLoaded: state.scores.scoresLoaded,
  handicap: state.scores.handicap,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getScores,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RoundHistory);

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
  flex-wrap: nowrap;
  overflow-x: auto;
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
