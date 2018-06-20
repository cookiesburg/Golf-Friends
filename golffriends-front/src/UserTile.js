import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Toggle from './Toggle';
import Modal from './Modal';
import RoundHistory from './RoundHistory';
import ScoreForm from './ScoreForm';
import DelUserBtn from './DelUserBtn';
import EditUserBtn from './EditUserBtn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { selectUser } from './users/actions';

class UserTile extends Component {
  state = {
    scores: [],
    handicap: 'calculating...',
  };

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/scores')
    .then(response => {
      const scores = response.data.filter(score => score.user_id === this.props.user.id);
      const handicap = this.calculateHandicap(scores);
      this.setState({ scores: scores, handicap: handicap });
    })
    .catch(error => console.log(error))
  }

  // calculateDiffs = (scores) => {
  //   scores.map(score => {
  //     return ((score.strokes - score.course.rating)*113 / score.course.slope);
  //   });
  // }

  calculateHandicap = (scores) => {
    if(scores.length < 5) {
      return 'post more scores';
    };

    const diffs = scores.map(score => {
      return ((score.strokes - score.course.rating)*113 / score.course.slope);
    });
    const sorted = diffs.sort((a, b) => a>b ? 1 : -1 );

    if (sorted.length < 11) {
      return Math.round(sorted[0]*.96);
    } else if (sorted.length < 20)  {
      const lowest = sorted.slice(0, 2);
      const lowestSum = lowest.reduce((a, b) => a+=b);
      return Math.round((lowestSum / 3)*.96)
    } else {
      const lowest = sorted.slice(0, 9);
      const lowestSum = lowest.reduce((a, b) => a+=b);
      return Math.round((lowestSum / 10)*.96)
    }
  }

  // selectUser = () => {
  //   const { selectUser } = this.props;
  //   selectUser(this.props.user.id);
  // }


  render() {
    return(
      <div>
        <Tile>
          <TopRow>
            <EditUserBtn user={this.props.user}/>

            <DelUserBtn user={this.props.user.id}/>
          </TopRow>
          <Name>{this.props.user.name}</Name>
          <ButtonBar>

            <ButtonWrapper>
              <Toggle>
                {({on, toggle}) => (
                  <Fragment>
                    <Modal on={on} toggle={toggle}>
                      <RoundHistory scores={this.state.scores} handicap={this.state.handicap} />
                    </Modal>
                    <ModalButton onClick={toggle}>SCORES</ModalButton>
                  </Fragment>
                )}
              </Toggle>
            </ButtonWrapper>

            <ButtonWrapper>
            <Toggle>
              {({on, toggle}) => (
                <Fragment>
                  <Modal on={on} toggle={toggle}>
                    <ScoreForm user={this.props.user} />
                  </Modal>
                  <ModalButton onClick={toggle}>POST</ModalButton>
                </Fragment>
              )}
            </Toggle>
            </ButtonWrapper>

          </ButtonBar>
        </Tile>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   user: state.users.user,
// });
//
// const mapDispatchToProps = dispatch => bindActionCreators({
//   // selectUser,
// }, dispatch);

export default UserTile;

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 150px;
  background: #222;
  cursor: default;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  border: 3px solid black;
  color: white;
  margin-top: 30px;
  margin-bottom: 30px;
  transition: all .4s ease;
    :hover {
      box-shadow: 0 0 3rem gray;
    }
`;
const TopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: white;
`;
const Name = styled.div`
  display: flex;
  flex-grow: 5;
  justify-content: center;
  align-items: center;
  letter-spacing: 3px;
`;
const ButtonBar = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;

`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  background: var(--base);
  justify-content: center;
  align-items: center;
`;
const ModalButton = styled.button`
  flex-grow: 1;
  height: 100%;
  border: none;
  letter-spacing: 2px;
  transition: all .4s ease;
    :hover {
      box-shadow: 0 0 3rem black;
      cursor: pointer;
    }
`;
