import React, { Component } from 'react';
import styled from 'styled-components';
import ScoreTile from './ScoreTile';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getScores } from './actions';
import { Form } from '../utilities/Form';

class RoundHistory extends Component {
  componentDidMount() {
    const user = this.props.user;
    this.props.getScores(user);
  }

  render() {
    const { scores, isLoaded, handicap } = this.props;
    if (!isLoaded) return <h1>loading scores...</h1>;
    return(
      <Form>
        <Header>
          Player Statistics
        </Header>
        <Display>
          <div className='handicap'>
              <h4>HANDICAP INDEX</h4>
              <p>{handicap}</p>
          </div>

          <div className='scores'>
            {scores.map(score => <ScoreTile  key={score.created_at} course={score.course.name} strokes={score.strokes} />)}
          </div>
        </Display>
      </Form>
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

const Header = styled.div`
  border: 1px solid black;
  height: 100px
  background: #222;
  font-size: 24px;
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Display = styled.div`
  display: flex;
  height: 100%;

    .handicap {
      width: 250px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h4 {
        color: gray;
      }
      p {
        font-size: 40px;
      }
    }
    .scores {
      display: flex;
      flex-direction: column;
      width: 150px;
      height: 100%;
      flex-wrap: nowrap;
      overflow-x: auto;
    }

`;
