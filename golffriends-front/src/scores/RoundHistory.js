import React, { Component } from 'react';
import styled from 'styled-components';
import ScoreTile from './ScoreTile';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getScores } from './actions';

class RoundHistory extends Component {
  componentDidMount() {
    const user = this.props.user;
    this.props.getScores(user);
  }

  render() {
    const { scores, isLoaded, handicap } = this.props;
    if (!isLoaded) return <h1>loading scores...</h1>;
    return(
      <HistoryBody>
        <Header>
          <p>PLAYER STATISTICS</p>
        </Header>
        <HcpSect>
          <NumDisplay>
            <p className='label'>HANDICAP INDEX</p>
            <p className={scores.length > 4 ? 'index' : ''}>{handicap}</p>
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
    width: 600px;
    height:400px;
    border: 1px solid black;
    flex-grow:1;
    font-family: karla;
`;
const Header = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  color:white;
  letter-spacing: 1px;
  background-color: #222;
  padding: 2px;
  font-family: karla;
`;
const HcpSect = styled.div`
  height: 60%;
  border: 1px solid red;
  display: flex;
`;
const HistSect = styled.div`
  flex-grow: 1;
  margin: 1px;
  display:flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  min-height: 130px;
`;
//grid would be better for this section

const NumDisplay = styled.div`
  flex-grow: 1;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 20px;
  }
  .index {
    font-size: 50px;
  }
  .label {
    font-size: 12px;
    color: gray;
  }
`;
const GraphDisplay = styled.div`
  flex-grow: 3;
  border: 1px solid orange;
`;
